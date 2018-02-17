import { CALLRESULT_MESSAGE } from './constants';

export
class Response {
  static parseMessage (message) {
    let messageType, messageId, payload;
    try {
      [messageType, messageId, payload] = JSON.parse(message);
    } catch (err) {
      throw new Error(`Failed to parse message: "${message}", ${err.message}`);
    }
    return [messageType, messageId, payload];
  }

  static toMessage (messageId, payload, messageType = CALLRESULT_MESSAGE) {
    return JSON.stringify([messageType, messageId, payload]);
  }
}
