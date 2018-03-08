import { CentralSystem, OCPPCommands } from '../dist';
import * as AuthorizeConst from '../dist/commands/Authorize';
import * as StartTransactionConst from '../dist/commands/StartTransaction';
import OCPPError, { ERROR_NOTIMPLEMENTED } from '../dist/ocppError';
import * as BootNotificationConst from '../dist/commands/BootNotification';
import * as StatusNotificationConst from '../dist/commands/StatusNotification';

export
function createServer(server) {
  const cSystem = new CentralSystem({
    validateConnection,
    wsOptions: { server }
  });

  cSystem.listen(null);

  cSystem.onStatusUpdate = async function (){};

  cSystem.onRequest = async function (client, command) {
    const connection = client.connection;

    console.info(`New command from ${connection.url}`);

    switch (true) {
      case command instanceof OCPPCommands.BootNotification:
        client.info = {
          connectors: [],
          ...command
        };
        return {
          status: BootNotificationConst.STATUS_ACCEPTED,
          currentTime: new Date().toISOString(),
          interval: 60
        };

      case command instanceof OCPPCommands.Authorize:
        return {
          idTagInfo: {
            status: AuthorizeConst.STATUS_ACCEPTED
          }
        };

      case command instanceof OCPPCommands.StartTransaction:
        return {
          transactionId: 1,
          idTagInfo: {
            status: StartTransactionConst.STATUS_ACCEPTED
          }
        };

      case command instanceof OCPPCommands.StopTransaction:
        return {
          transactionId: 1,
          idTagInfo: {
            status: StartTransactionConst.STATUS_ACCEPTED
          }
        };

      case command instanceof OCPPCommands.Heartbeat:
        return {
          currentTime: new Date().toISOString()
        };

      case command instanceof OCPPCommands.StatusNotification:
        // client.info = client.info || {};
        // client.info.connectors = client.info.connectors || [];

        const connectorIndex = client.info.connectors.findIndex(item => command.connectorId === item.connectorId);
        if (connectorIndex === -1) {
          client.info.connectors.push({
            ...command
          });
        } else {
          client.info.connectors[connectorIndex] = {
            ...command
          };
        }
        await cSystem.onStatusUpdate();
        return {};
      default:
        throw new OCPPError(ERROR_NOTIMPLEMENTED, 'Unknown command');
    }
  };

  cSystem.toggleChargePoint = async (client, connectorId) => {
    const connector = client.info.connectors.find(item => connectorId.toString() === item.connectorId.toString());
    if (!connector) {
      return null;
    }

    if (connector.status !== StatusNotificationConst.STATUS_AVAILABLE) {
      let command = new OCPPCommands.RemoteStopTransaction({
        transactionId: connectorId
      });
      await client.connection.send(command);
      return;
    }

    let command = new OCPPCommands.RemoteStartTransaction({
      connectorId: connectorId,
      idTag: '' + connectorId
    });

    await client.connection.send(command);
  };
  return cSystem;

  function validateConnection(url) {
    return true;
  }
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
