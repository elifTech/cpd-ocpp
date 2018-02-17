import commands from './commands';
import { CALL_MESSAGE } from './constants';

export
class Request {
  static fromMessage (message) {
    let messageType, messageId, commandName, commandPayload;
    try {
      [messageType, messageId, commandName, commandPayload] = JSON.parse(message);
    } catch (err) {
      throw new Error(`Failed to parse message: "${message}", ${err.message}`);
    }
    if (messageType !== CALL_MESSAGE) {
      throw new Error(`Wront reqeust type ${messageType}`);
    }
    if (!commands[commandName]) {
      throw new Error(`Unknown command ${commandName}`);
    }
    const CommandModel = commands[commandName];
    const command = new CommandModel(commandPayload);

    return [messageId, command];
  }

  static toMessage (messageId, command) {
    const commandName = command.getCommandName();
    const commandValues = command.getCommandValues();

    return JSON.stringify([CALL_MESSAGE, messageId, commandName, commandValues]);
  }
}
