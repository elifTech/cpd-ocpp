import WebSocket from 'ws';
import debugFn from 'debug';
import { Connection } from './connection';
import {
  DEBUG_LIBNAME,
  OCPP_PROTOCOL_1_6
} from './constants';

const debug = debugFn(DEBUG_LIBNAME);

export default class CentralSystemClient {
  constructor (connection) {
    this.connection = connection;
  }
}
