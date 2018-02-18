import WebSocket from 'ws';
import uuid from 'uuid/v4';

import { Connection } from '../src/connection';
import { CALL_MESSAGE, CALLRESULT_MESSAGE } from '../src/constants';
import { BootNotification, STATUS_ACCEPTED } from '../src/commands/BootNotification';

const socketEmpty = {
  on: () => {}
};

describe('constructor', () => {
  test('Init socket callbacks', () => {
    const socket = {
      on: jest.fn()
    };
    const conn = new Connection(socket);

    expect(socket.on).toBeCalledWith('message', expect.any(Function));
    expect(socket.on).toBeCalledWith('error', expect.any(Function));
  });
});

describe('onMessage', () => {
  test('Send response message', async () => {
    const conn = new Connection(socketEmpty);
    const message = '[2, "1", "BootNotification", {"chargePointVendor":"BrandX","chargePointModel":"ModelY"}]';

    conn.sendMessage = jest.fn();
    conn.onRequest = () => {
      return {
        status: STATUS_ACCEPTED,
        currentTime: new Date().toISOString(),
        interval: 60
      };
    };

    await conn.onMessage(message);

    expect(conn.sendMessage).toBeCalledWith('1', expect.objectContaining({
      status: STATUS_ACCEPTED,
      interval: 60
    }), CALLRESULT_MESSAGE);
  });

  test('Error when wrong command', () => {
    const conn = new Connection(socketEmpty);
    const message = '[3,';

    expect(conn.onMessage(message)).rejects.toThrow('Failed to parse message: "[3,", Unexpected end of JSON input');
  });

  test('Error when wrong command', () => {
    const conn = new Connection(socketEmpty);
    const message = '[2, "1", "UnknownCommand", {}]';

    expect(conn.onMessage(message)).rejects.toThrow('Unknown command UnknownCommand');
  });

  test('Error when response without request', () => {
    const conn = new Connection(socketEmpty);
    const message = '[3,"1","BootNotification",{"chargePointVendor": "BrandX"}]';

    expect(conn.onMessage(message)).rejects.toThrow('Response for unknown message 1');
  });

  test('Error when response without request', () => {
    const conn = new Connection(socketEmpty);
    const message = '[2,"1","BootNotification",{"chargePointVendor":123}]';

    expect(conn.onMessage(message)).rejects.toThrow('Invalid value "123" for field chargePointVendor');
  });
});

describe('sendMessage', () => {
  test('Send response message', async () => {
    const socket = {
      on: jest.fn(),
      send: jest.fn(),
      readyState: WebSocket.OPEN
    };
    const conn = new Connection(socket);
    const response = (new BootNotification({
      chargePointVendor: 'BrandX',
      chargePointModel: 'ModelY'
    })).createResponse({
      status: STATUS_ACCEPTED,
      currentTime: new Date().toISOString(),
      interval: 60
    });
    conn.send(response, CALLRESULT_MESSAGE);

    expect(conn.requests).toEqual({}); // do not save response callback for responses
    expect(socket.send).toBeCalledWith(expect.stringMatching(/\[3,"(.*)",{"status":"Accepted","currentTime":"(.*)","interval":60}\]/));
  });

  test('Send message and wait for response', async () => {
    const socket = {
      on: jest.fn(),
      send: jest.fn(),
      readyState: WebSocket.OPEN
    };
    const conn = new Connection(socket);
    const command = new BootNotification({
      chargePointVendor: 'BrandX',
      chargePointModel: 'ModelY'
    });
    const messageId = uuid();

    // >> send request
    const promise = conn.sendMessage(messageId, command, CALL_MESSAGE);
    // save callback for request
    expect(conn.requests).toEqual({
      [ messageId ]: [expect.any(Function), expect.any(Function)]
    });
    expect(socket.send).toBeCalledWith(`[2,"${messageId}","BootNotification",{"chargePointVendor":"BrandX","chargePointModel":"ModelY"}]`);

    // << response
    const time = new Date().toISOString();
    const message = `[3,"${messageId}",{"status": "Accepted","interval": 60, "currentTime": "${time}"}]`;
    conn.onMessage(message);

    await expect(promise).resolves.toEqual(expect.objectContaining({
      status: STATUS_ACCEPTED,
      currentTime: time,
      interval: 60
    }));

    // remove callback after resolving
    expect(conn.requests).toEqual({});
  });
});
