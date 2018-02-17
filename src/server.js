import WebSocket from 'ws';
import {Request} from './request';
import {Response} from './response';

export default
class Server {
  constructor (options) {
    this.options = options;
  }

  listen (port = 9220) {
    this.port = port;

    this.server = new WebSocket.Server({ port });

    this.server.on('connection', (ws) => this.onNewConnection(ws));

    console.log(`[OCPPServer] Listen on ${port}`);
  }

  onNewConnection (socket) {
    console.info('new connection');

    socket.on('message', (msg) => this.onMessage(socket, msg));
  }

  async onMessage (socket, message) {
    try {
      const [messageId, requestCommand] = Request.fromMessage(message);

      const responseData = await this.onRequest(requestCommand);
      const response = requestCommand.createResponse(responseData);

      socket.send(Response.toMessage(messageId, response));
    } catch (err) {
      console.info(err.message);
    }
  }

  async onRequest (request, response) {
    // implementation
  }
}
