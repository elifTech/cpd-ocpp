import uuid from 'uuid/v4';
import debugFn from 'debug';
import commands from './commands';
import {
  DEBUG_LIBNAME,
  CALL_MESSAGE,
  CALLRESULT_MESSAGE,
  CALLERROR_MESSAGE
} from './constants';
import { getObjectValues } from './helpers';

const debug = debugFn(DEBUG_LIBNAME);

export
class Connection
{
  constructor(socket, req = null) {
    this.socket = socket;
    this.req = req;
    this.requests = {};

    if (req) {
      this.url = req && req.url;
      const ip = req && ((req.connection && req.connection.remoteAddress) || req.headers[ 'x-forwarded-for' ]);

      debug(`New connection from "${ip}", protocol "${socket.protocol}", url "${this.url}"`);
    } else {
      this.url = 'SERVER';
      debug(`New connection to server`);
    }

    socket.on('message', (msg) => this.onMessage(msg));

    socket.on('error', (err) => {
      console.info(err);
    });
  }

  async onMessage(message) {
    let messageType, messageId, commandNameOrPayload, commandPayload;

    try {
      [messageType, messageId, commandNameOrPayload, commandPayload] = JSON.parse(message);
    } catch (err) {
      throw new Error(`Failed to parse message: "${message}", ${err.message}`);
    }

    switch(messageType) {
      case CALL_MESSAGE:
        // request
        debug(`>> ${this.url}: ${message}`);

        const CommandModel = commands[commandNameOrPayload];
        if (!CommandModel) {
          throw new Error(`Unknown command ${commandNameOrPayload}`);
        }
        const commandRequest = new CommandModel(commandPayload);

        const responseData = await this.onRequest(commandRequest);
        const responseObj = commandRequest.createResponse(responseData);

        this.sendMessage(messageId, responseObj, CALLRESULT_MESSAGE);
        break;
      case CALLRESULT_MESSAGE:
      case CALLERROR_MESSAGE:
        // response
        debug(`>> ${this.url}: ${message}`);

        const responseCallback = this.requests[messageId];
        if (!responseCallback) {
          throw new Error(`Response for unknown message ${messageId}`);
        }
        delete this.requests[messageId];

        responseCallback(commandNameOrPayload);
        break;
      default:
        throw new Error(`Wrong message type ${messageType}`);
    }
  }

  send(command, messageType = CALL_MESSAGE) {
    return this.sendMessage(uuid(), command, messageType)
  }

  sendMessage(messageId, command, messageType = CALLRESULT_MESSAGE) {
    const socket = this.socket;

    const commandValues = getObjectValues(command);

    return new Promise((resolve, reject) => {
      this.requests[messageId] = onResponse;

      let messageToSend;

      switch (messageType) {
        case CALL_MESSAGE:
          const commandName = command.getCommandName();

          messageToSend = JSON.stringify([messageType, messageId, commandName, commandValues]);
          break;
        case CALLRESULT_MESSAGE:
        case CALLERROR_MESSAGE:
          messageToSend = JSON.stringify([messageType, messageId, commandValues]);
          break;
      }

      debug(`<< ${messageToSend}`);
      socket.send(messageToSend);

      function onResponse(payload) {
        const response = command.createResponse(payload);

        return resolve(response);
      }
    });
  }

  onRequest(request) {

  }
}
