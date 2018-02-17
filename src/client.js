import WebSocket from 'ws';
import {Request} from './request';
import {Response} from './response';
import uuid from 'uuid/v4';

import {CALLERROR_MESSAGE, CALLRESULT_MESSAGE} from './constants';

export default
class Client {
  constructor (options) {
    this.options = options;
  }

  connect () {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.options.serverUrl, {
        perMessageDeflate: false,
        protocol: 'ocpp1.5',
        protocolVersion: 13
      });

      this.ws.on('message', (data) => this.onResponse(data));

      this.ws.on('open', () => resolve());

      this.ws.on('error', reject);

      return this.ws;
    });
  }

  send (command) {
    const requestMessageId = uuid();
    const socket = this.ws;

    return new Promise((resolve, reject) => {
      socket.addListener('message', onMessage);

      socket.send(Request.toMessage(requestMessageId, command));

      function onMessage (message) {
        const [messageType, messageId, payload] = Response.parseMessage(message);
        if (messageId !== requestMessageId) {
          return;
        }
        socket.removeListener('message', onMessage);

        switch (messageType) {
          case CALLRESULT_MESSAGE: return resolve(command.createResponse(payload));
          case CALLERROR_MESSAGE: return reject(payload);
          default: return reject(new Error(`Unknown message type ${messageType}`));
        }
      }
    });
  }

  onResponse (data) {
    console.info(data);
  }
}
