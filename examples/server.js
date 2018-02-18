import { OCPPCentralSystem, OCPPCommands } from '../src';
import * as AuthorizeConst from '../src/commands/Authorize';
import * as BootNotificationConst from '../src/commands/BootNotification';

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});
process.on('unhandledRejection', function (reason, p) {
  console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

const server = new OCPPCentralSystem({
  validateConnection
});

server.listen();

server.onRequest = async function (connection, command) {
  console.info(`New command from ${connection.url}`);

  switch (true) {
    case command instanceof OCPPCommands.BootNotification:
      return {
        status: BootNotificationConst.STATUS_ACCEPTED,
        currentTime: new Date().toISOString(),
        interval: 60
      };

    case command instanceof OCPPCommands.Authorize:
      return {
        idTagInfo: {
          status: AuthorizeConst.STATUS_ACCEPTED,
          expiryDate: new Date().toISOString(),
          parentIdTag: 'test'
        }
      };

    case command instanceof OCPPCommands.Heartbeat:
      return {
        currentTime: new Date().toISOString()
      };
  }
};

function validateConnection(url) {
  console.info(url);
  return true;
}
