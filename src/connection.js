import uuid from 'uuid/v4';
import Websocket from 'ws';
import debugFn from 'debug';
import commands from './commands';
import {
  DEBUG_LIBNAME,
  CALL_MESSAGE,
  CALLRESULT_MESSAGE,
  CALLERROR_MESSAGE,
  SOCKET_TIMEOUT
} from './constants';
import { getObjectValues } from './helpers';
import OCPPError, {
  ERROR_FORMATIONVIOLATION,
  ERROR_INTERNALERROR
} from './ocppError';

const debug = debugFn(DEBUG_LIBNAME);

export
class Connection {
  constructor (socket, req = null, logger = null) {
    this.socket = socket;
    this.req = req;
    this.requests = {};
    this.logger = logger;

    if (req) {
      this.url = req && req.url;
      const ip = req && ((req.connection && req.connection.remoteAddress) || req.headers[ 'x-forwarded-for' ]);

      if (this.logger) {
        this.logger.debug({ id: this.url, message: `New connection from "${ip}", protocol "${socket.protocol}", url "${this.url}"` });
      } else {
        debug(`New connection from "${ip}", protocol "${socket.protocol}", url "${this.url}"`);
      }
    } else {
      this.url = 'SERVER';
      debug(`New connection to server`);
    }

    socket.on('message', (msg) => this.onMessage(msg));

    socket.on('error', (err) => {
      console.info(err);
    });
  }

  async onMessage (message) {
    let messageType, messageId, commandNameOrPayload, commandPayload, errorDetails;

    try {
      [messageType, messageId, commandNameOrPayload, commandPayload, errorDetails] = JSON.parse(message);
    } catch (err) {
      throw new Error(`Failed to parse message: "${message}", ${err.message}`);
    }

    switch (messageType) {
      case CALL_MESSAGE:
        // request
        if (this.logger) {
          this.logger.debug(`>> ${this.url}: ${message}`);
        } else {
          debug(`>> ${this.url}: ${message}`);
        }

        const CommandModel = commands[commandNameOrPayload];
        if (!CommandModel) {
          throw new Error(`Unknown command ${commandNameOrPayload}`);
        }
        let commandRequest, responseData, responseObj;
        try {
          commandRequest = new CommandModel(commandPayload);
        } catch (err) {
          // send error if payload didn't pass the validation
          return await this.sendError(messageId, new OCPPError(ERROR_FORMATIONVIOLATION, err.message));
        }

        try {
          responseData = await this.onRequest(commandRequest);
          responseObj = commandRequest.createResponse(responseData);
        } catch (err) {
          return await this.sendError(messageId, err);
        }

        try {
          await this.sendMessage(messageId, responseObj, CALLRESULT_MESSAGE);
        } catch (err) {
          await this.sendError(messageId, err);
        }
        break;
      case CALLRESULT_MESSAGE:
        // response
        if (this.logger) {
          this.logger.debug(`>> ${this.url}: ${message}`);
        } else {
          debug(`>> ${this.url}: ${message}`);
        }

        const [responseCallback] = this.requests[messageId];
        if (!responseCallback) {
          throw new Error(`Response for unknown message ${messageId}`);
        }
        delete this.requests[messageId];

        responseCallback(commandNameOrPayload);
        break;
      case CALLERROR_MESSAGE:
        // error response
        if (this.logger) {
          this.logger.debug(`>> ${this.url}: ${message}`);
        } else {
          debug(`>> ${this.url}: ${message}`);
        }

        if (!this.requests[messageId]) {
          throw new Error(`Response for unknown message ${messageId}`);
        }
        const [, rejectCallback] = this.requests[messageId];
        delete this.requests[messageId];

        rejectCallback(new OCPPError(commandNameOrPayload, commandPayload, errorDetails));
        break;
      default:
        throw new Error(`Wrong message type ${messageType}`);
    }
  }

  send (command, messageType = CALL_MESSAGE) {
    return this.sendMessage(uuid(), command, messageType);
  }

  sendError (messageId, err) {
    if (this.logger) {
      this.logger.debug(`Error: ${err.message}`);
    } else {
      debug(`Error: ${err.message}`);
    }

    const error = err instanceof OCPPError ? err : new OCPPError(ERROR_INTERNALERROR, err.message);

    return this.sendMessage(messageId, error, CALLERROR_MESSAGE);
  }

  sendMessage (messageId, command, messageType = CALLRESULT_MESSAGE) {
    const socket = this.socket;
    const self = this;
    const commandValues = getObjectValues(command);

    return new Promise((resolve, reject) => {
      let messageToSend;

      switch (messageType) {
        case CALL_MESSAGE:
          this.requests[messageId] = [onResponse, onRejectResponse];
          const commandName = command.getCommandName();

          messageToSend = JSON.stringify([messageType, messageId, commandName, commandValues]);
          break;
        case CALLRESULT_MESSAGE:
          messageToSend = JSON.stringify([messageType, messageId, commandValues]);
          break;
        case CALLERROR_MESSAGE:
          const { code, message, details } = command;
          messageToSend = JSON.stringify([messageType, messageId, code, message, details]);
          break;
      }

      if (this.logger) {
        this.logger.debug(`<< ${messageToSend}`);
      } else {
        debug(`<< ${messageToSend}`);
      }

      if (socket.readyState === Websocket.OPEN) {
        socket.send(messageToSend);
      } else {
        return onRejectResponse(`Socket closed ${messageId}`);
      }
      if (messageType !== CALL_MESSAGE) {
        resolve();
      } else {
        setTimeout(() => onRejectResponse(`Timeout for message ${messageId}`), SOCKET_TIMEOUT);
      }

      function onResponse (payload) {
        const response = command.createResponse(payload);

        return resolve(response);
      }
      function onRejectResponse(reason) {
        self.requests[messageId] = () => {};
        const error = reason instanceof OCPPError ? reason : new Error(reason);
        reject(error);
      }
    });
  }

  onRequest (request) {

  }
}
