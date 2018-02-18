'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEBUG_LIBNAME = exports.DEBUG_LIBNAME = 'ocpp-eliftech';

var OCPP_PROTOCOL_1_6 = exports.OCPP_PROTOCOL_1_6 = 'ocpp1.6';

var SOCKET_TIMEOUT = exports.SOCKET_TIMEOUT = 30 * 1000; // 30 sec

// ## MessageType constants
//
// To identify the type of message one of the following Message Type Numbers MUST be used.
//
// When a server receives a message with a Message Type Number not in this list, it SHALL ignore the
// message payload. Each message type may have additional required fields.
var CALL_MESSAGE = exports.CALL_MESSAGE = 2; // Client-to-Server
var CALLRESULT_MESSAGE = exports.CALLRESULT_MESSAGE = 3; // Server-to-Client
var CALLERROR_MESSAGE = exports.CALLERROR_MESSAGE = 4; // Server-to-Client
//# sourceMappingURL=constants.js.map