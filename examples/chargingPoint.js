import { OCPPClient, OCPPCommands } from '../dist';

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});
process.on('unhandledRejection', function(reason, p){
    console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

async function run() {
    const client = new OCPPClient({
        serverUrl: 'http://localhost:9220/webServices/ocpp/CP3211'
    });

    await client.connect();

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

}

run();