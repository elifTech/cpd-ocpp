import { OCPPServer, OCPPCommands } from '../dist';
import * as AuthorizeConst from '../dist/commands/Authorize';
import * as BootNotificationConst from '../dist/commands/BootNotification';

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});
process.on('unhandledRejection', function(reason, p){
    console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

const server = new OCPPServer();

server.listen();

server.onRequest = async function(request) {
    switch(true) {
        case request instanceof OCPPCommands.BootNotification:
            return {
                status: BootNotificationConst.STATUS_ACCEPTED,
                currentTime: new Date().toISOString(),
                interval: 60
            };
        case request instanceof OCPPCommands.Authorize:
            return {
                idTagInfo: {
                    status: AuthorizeConst.STATUS_ACCEPTED,
                    expiryDate: new Date().toISOString(),
                    parentIdTag: 'test'
                }
            };
    }
};