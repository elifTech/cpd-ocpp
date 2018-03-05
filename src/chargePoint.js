import WebSocket from 'ws';
import debugFn from 'debug';
import Commands from './commands';
import { Connection } from './connection';

import {
  OCPP_PROTOCOL_1_6,
  DEBUG_LIBNAME
} from './constants';

const debug = debugFn(DEBUG_LIBNAME);

export default class ChargePoint {
  /**
   * Create OCPP client
   *
   * @param {Object} options Configuration options
   * @param {String} options.centralSystemUrl The url where to connect
   * @param {String} options.reconnectInterval The number of milliseconds to delay before attempting to reconnect (default: 5 minutes)
   * @param {String} options.connectors Array of virtual connectors
   */
  constructor (options) {
    options.connectors = options.connectors || [];

    this.options = options;
  }

  connect () {
    debug(`Try connect to ${this.options.centralSystemUrl}`);

    let reconnectTimer;
    const reconnectInterval = this.options.reconnectInterval || 5 * 60 * 1000; // 5 minutes
    const self = this;

    return new Promise((resolve, reject) => {
      const ws = new WebSocket(this.options.centralSystemUrl, [OCPP_PROTOCOL_1_6], {
        perMessageDeflate: false,
        protocolVersion: 13
      });

      ws.on('upgrade', (res) => {
        if (!res.headers['sec-websocket-protocol']) {
          return reject(new Error(`Server doesn't support protocol ${OCPP_PROTOCOL_1_6}`));
        }
      });

      ws.on('close', () => {
        debug(`Connection is closed`);
        this.connection = null;
        nextReconnectAttempt();
      });
      ws.on('open', () => {
        ws.removeAllListeners('error');

        this.connection = new Connection(ws);
        this.connection.onRequest = (command) => this.onRequest(command);

        resolve(this.connection);
      });

      ws.on('error', reject);
    });

    function nextReconnectAttempt () {
      if (reconnectTimer) {
        clearInterval(reconnectTimer);
        reconnectTimer = null;
      }

      reconnectTimer = setTimeout(async () => {
        try {
          await self.connect();
        } catch (err) {
        }
      }, reconnectInterval);
    }
  }

  send (command) {
    if (!this.connection) {
      return false;
    }
    return this.connection.send(command);
  }

  onRequest (command) {
  }

  getConnectors () {
    return this.options.connectors;
  }

  async sendCurrentStatus() {
    const promises = this.getConnectors().map(async (connector) => {
      const status = {
        timestamp: new Date().toISOString(),
        ...connector
      };
      const statusCommand = new Commands.StatusNotification(status);

      await this.send(statusCommand)
    });

    return await Promise.all(promises);
  }
}
