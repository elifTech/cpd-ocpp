import { OCPPChargePoint, OCPPCommands } from '../src';

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});
process.on('unhandledRejection', function (reason, p) {
  console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

async function run() {
  const client = new OCPPChargePoint({
    centralSystemUrl: `http://localhost:9220/webServices/ocpp/CP${Math.floor(Math.random() * 9999)}`
  });

  try {
    await client.connect();

    client.onRequest = async (command) => {
      console.info('onRequest', command);
    };

    setInterval(async () => {
      const heartbeat = new OCPPCommands.Heartbeat();

      let answer = await client.send(heartbeat);
      console.info(answer);
    }, 3000);

    const boot = new OCPPCommands.BootNotification({
      chargePointVendor: 'BrandX',
      chargeBoxSerialNumber: 'AQ1234VB5678',
      chargePointSerialNumber: '123',
      chargePointModel: '12'
    });

    let answer = await client.send(boot);
    console.info(answer);

    const command = new OCPPCommands.Authorize({
      idTag: 'Test'
    });

    answer = await client.send(command);
    console.info(answer);
  } catch (err) {
    console.error(err);
  }
}

run();
