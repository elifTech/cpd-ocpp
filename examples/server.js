import http from 'http';
import url from 'url';
import fs from 'fs';
import querystring from 'querystring';
import { createServer } from './сentralSystem';

//var fileServer = new(require('node-static')).Server('.');

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});
process.on('unhandledRejection', function (reason, p) {
  console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

const server = http.createServer(accept);
const centralSystem = createServer(server);

server.listen(process.env.PORT || 9220);

function onDigits(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache'
  });

  const timer = setInterval(write, 1000);
  write();

  function write() {
    const data = centralSystem.clients.map(client => {
      return client.info;
    });
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }
}

async function accept(req, res, next) {

  if (req.url === '/status') {
    onDigits(req, res);
    centralSystem.onStatusUpdate = () => onDigits(req, res);
    return;
  }
  let match;
  if (match = req.url.match(/\/connector\/(\d+)\/(\d+)/)) {
    const client = centralSystem.clients[+match[1]];
    if (client) {
      const result = await centralSystem.toggleChargePoint(client, +match[ 2 ]);
      res.write(JSON.stringify({}));
    }
    res.end();
    return;
  }

  fs.readFile(`${__dirname}/../index.html`, (err, file) => {
    if (err) {
      return next(err);
    }

    // res.set('Content-type', 'text/html');
    res.write(file);
    res.end();
  });
}
