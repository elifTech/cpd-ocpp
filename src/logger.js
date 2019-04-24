import debugFn from 'debug';
import {
  DEBUG_LIBNAME
} from './constants';
import Websocket from 'ws';

const debug = debugFn(DEBUG_LIBNAME);

export const LOGGER_URL = '/logger';

const COUNT_MESSAGE_TO_STORE = 10;

export default class Logger {
  constructor() {
    this.sockets = [];
    this.messages = [];
  }

  addSocket(socket) {
    this.sockets.push(socket);
    console.info('add');
    socket.send(JSON.stringify({ command: 'history', messages: this.messages }));
  }

  debug(message) {
    if (typeof message !== 'string') {
      message = JSON.stringify(message);
    }
    this.messages.push(message);
    if (this.messages.length > COUNT_MESSAGE_TO_STORE) {
      this.messages = this.messages.slice(this.messages.length - COUNT_MESSAGE_TO_STORE, this.messages.length)
    }

    debug(message);
    this.sendMessage({ command: 'message', message });
  }

  sendMessage(messageToSend) {
    if (typeof messageToSend !== 'string') {
      messageToSend = JSON.stringify(messageToSend);
    }

    for (let socket of this.sockets) {
      if (socket.readyState === Websocket.OPEN) {
        socket.send(messageToSend);
      }
    }
  }
}
