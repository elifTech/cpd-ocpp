# Open Charge Point Protocol 1.6

[![Build Status](https://travis-ci.org/elifTech/cpd-ocpp.svg?branch=master)](https://travis-ci.org/elifTech/cpd-ocpp)

This repository contain abstraction layer for easy work with OCPP and validate input and output requests.
Currently implemented only version 1.6 JSON. Whereas OCPP2.0 will support only JSON have no plans to implement SOAP.

## Article

https://www.eliftech.com/blog/48-a-diy-charging-point-for-an-electric-car-perspective-protocol-and-prototype

## Installation
```
npm install --save ocpp-eliftech
```

## Overview

Open Charge Point Protocol (OCPP, <http://www.openchargealliance.org/>) is a communication protocol between multiple charging stations ("charge points") and a single management software ("central system").

## Usage

Server

```js
import { OCPPServer, OCPPCommands } from 'ocpp-eliftech';

const server = new OCPPServer();

server.listen(9220);

server.onRequest = async function(command) {
    // Handle different commands
    if (command instanceof OCPPCommands.BootNotification) {
        return {
            status: 'Accepted',
            currentTime: new Date().toISOString(),
            interval: 60
        };
    }
}
```

Client

```js
import { OCPPClient, OCPPCommands } from 'ocpp-eliftech';

const client = new OCPPClient({
    serverUrl: 'http://localhost:9220/webServices/ocpp/CP1111'
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
```

### P.S.

If you need professional support with your IOT projects contact us http://www.eliftech.com/.
