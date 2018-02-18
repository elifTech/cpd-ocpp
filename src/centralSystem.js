import WebSocket from 'ws';
import debugFn from 'debug';
import { Connection } from './connection';
import {
  DEBUG_LIBNAME,
  OCPP_PROTOCOL_1_6
} from './constants';

const debug = debugFn(DEBUG_LIBNAME);

export default class CentralSystem {
  constructor (options) {
    this.options = options || {};
    this.clients = [];
  }

  listen (port = 9220, host = null) {
    this.port = port;

    const validateConnection = this.options.validateConnection || (() => true);

    const wsOptions = {
      port,
      host,
      handleProtocols: (protocols, req) => {
        if (protocols.indexOf(OCPP_PROTOCOL_1_6) === -1) {
          return '';
        }
        return OCPP_PROTOCOL_1_6;
      },
      verifyClient: async (info, cb) => {
        const isAccept = await validateConnection(info.req.url);

        debug(`Request for connect "${info.req.url}" (${info.req.headers['sec-websocket-protocol']}) - ${isAccept ? 'Valid identifier' : 'Invalid identifier'}`);

        cb(isAccept, 404, 'Central System does not recognize the charge point identifier in the URL path');
      },
      ...(this.options.wsOptions || {})
    };

    this.server = new WebSocket.Server(wsOptions);

    this.server.on('error', (ws, req) => {
      console.info(ws, req);
    });

    this.server.on('upgrade', (ws, req) => {
      console.info(req);
    });
    this.server.on('connection', (ws, req) => this.onNewConnection(ws, req));

    debug(`Listen on ${host || 'default host'}:${port}`);
  }

  onNewConnection (socket, req) {
    socket.on('error', (err) => {
      console.info(err, socket.readyState);
    });

    if (!socket.protocol) {
      // From Spec: If the Central System does not agree to using one of the subprotocols offered by the client,
      // it MUST complete the WebSocket handshake with a response without a Sec-WebSocket-Protocol header and then
      // immediately close the WebSocket connection.
      debug(`Close connection due to unsupported protocol`);
      return socket.close();
    }

    const connection = new Connection(socket, req);

    connection.onRequest = (command) => this.onRequest(connection, command);

    socket.on('close', (err) => {
      const index = this.clients.indexOf(connection);
      this.clients.splice(index, 1);
    });
    this.clients.push(connection);
  }

  async onRequest (connection, command) {
    // implementation
  }
}
