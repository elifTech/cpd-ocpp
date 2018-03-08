'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connection = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _commands = require('./commands');

var _commands2 = _interopRequireDefault(_commands);

var _constants = require('./constants');

var _helpers = require('./helpers');

var _ocppError = require('./ocppError');

var _ocppError2 = _interopRequireDefault(_ocppError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)(_constants.DEBUG_LIBNAME);

var Connection = exports.Connection = function () {
  function Connection(socket) {
    var _this = this;

    var req = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    (0, _classCallCheck3.default)(this, Connection);

    this.socket = socket;
    this.req = req;
    this.requests = {};

    if (req) {
      this.url = req && req.url;
      var ip = req && (req.connection && req.connection.remoteAddress || req.headers['x-forwarded-for']);

      debug('New connection from "' + ip + '", protocol "' + socket.protocol + '", url "' + this.url + '"');
    } else {
      this.url = 'SERVER';
      debug('New connection to server');
    }

    socket.on('message', function (msg) {
      return _this.onMessage(msg);
    });

    socket.on('error', function (err) {
      console.info(err);
    });
  }

  (0, _createClass3.default)(Connection, [{
    key: 'onMessage',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(message) {
        var messageType, messageId, commandNameOrPayload, commandPayload, errorDetails, _JSON$parse, _JSON$parse2, CommandModel, commandRequest, responseData, responseObj, _requests$messageId, responseCallback, _requests$messageId2, rejectCallback;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                messageType = void 0, messageId = void 0, commandNameOrPayload = void 0, commandPayload = void 0, errorDetails = void 0;
                _context.prev = 1;
                _JSON$parse = JSON.parse(message);
                _JSON$parse2 = (0, _slicedToArray3.default)(_JSON$parse, 5);
                messageType = _JSON$parse2[0];
                messageId = _JSON$parse2[1];
                commandNameOrPayload = _JSON$parse2[2];
                commandPayload = _JSON$parse2[3];
                errorDetails = _JSON$parse2[4];
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);
                throw new Error('Failed to parse message: "' + message + '", ' + _context.t0.message);

              case 14:
                _context.t1 = messageType;
                _context.next = _context.t1 === _constants.CALL_MESSAGE ? 17 : _context.t1 === _constants.CALLRESULT_MESSAGE ? 53 : _context.t1 === _constants.CALLERROR_MESSAGE ? 60 : 67;
                break;

              case 17:
                // request
                debug('>> ' + this.url + ': ' + message);

                CommandModel = _commands2.default[commandNameOrPayload];

                if (CommandModel) {
                  _context.next = 21;
                  break;
                }

                throw new Error('Unknown command ' + commandNameOrPayload);

              case 21:
                commandRequest = void 0, responseData = void 0, responseObj = void 0;
                _context.prev = 22;

                commandRequest = new CommandModel(commandPayload);
                _context.next = 31;
                break;

              case 26:
                _context.prev = 26;
                _context.t2 = _context['catch'](22);
                _context.next = 30;
                return this.sendError(messageId, new _ocppError2.default(_ocppError.ERROR_FORMATIONVIOLATION, _context.t2.message));

              case 30:
                return _context.abrupt('return', _context.sent);

              case 31:
                _context.prev = 31;
                _context.next = 34;
                return this.onRequest(commandRequest);

              case 34:
                responseData = _context.sent;

                responseObj = commandRequest.createResponse(responseData);
                _context.next = 43;
                break;

              case 38:
                _context.prev = 38;
                _context.t3 = _context['catch'](31);
                _context.next = 42;
                return this.sendError(messageId, _context.t3);

              case 42:
                return _context.abrupt('return', _context.sent);

              case 43:
                _context.prev = 43;
                _context.next = 46;
                return this.sendMessage(messageId, responseObj, _constants.CALLRESULT_MESSAGE);

              case 46:
                _context.next = 52;
                break;

              case 48:
                _context.prev = 48;
                _context.t4 = _context['catch'](43);
                _context.next = 52;
                return this.sendError(messageId, _context.t4);

              case 52:
                return _context.abrupt('break', 68);

              case 53:
                // response
                debug('>> ' + this.url + ': ' + message);

                _requests$messageId = (0, _slicedToArray3.default)(this.requests[messageId], 1), responseCallback = _requests$messageId[0];

                if (responseCallback) {
                  _context.next = 57;
                  break;
                }

                throw new Error('Response for unknown message ' + messageId);

              case 57:
                delete this.requests[messageId];

                responseCallback(commandNameOrPayload);
                return _context.abrupt('break', 68);

              case 60:
                // error response
                debug('>> ' + this.url + ': ' + message);

                if (this.requests[messageId]) {
                  _context.next = 63;
                  break;
                }

                throw new Error('Response for unknown message ' + messageId);

              case 63:
                _requests$messageId2 = (0, _slicedToArray3.default)(this.requests[messageId], 2), rejectCallback = _requests$messageId2[1];

                delete this.requests[messageId];

                rejectCallback(new _ocppError2.default(commandNameOrPayload, commandPayload, errorDetails));
                return _context.abrupt('break', 68);

              case 67:
                throw new Error('Wrong message type ' + messageType);

              case 68:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11], [22, 26], [31, 38], [43, 48]]);
      }));

      function onMessage(_x2) {
        return _ref.apply(this, arguments);
      }

      return onMessage;
    }()
  }, {
    key: 'send',
    value: function send(command) {
      var messageType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.CALL_MESSAGE;

      return this.sendMessage((0, _v2.default)(), command, messageType);
    }
  }, {
    key: 'sendError',
    value: function sendError(messageId, err) {
      debug('Error: ' + err.message);

      var error = err instanceof _ocppError2.default ? err : new _ocppError2.default(_ocppError.ERROR_INTERNALERROR, err.message);

      return this.sendMessage(messageId, error, _constants.CALLERROR_MESSAGE);
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage(messageId, command) {
      var _this2 = this;

      var messageType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.CALLRESULT_MESSAGE;

      var socket = this.socket;
      var self = this;
      var commandValues = (0, _helpers.getObjectValues)(command);

      return new _promise2.default(function (resolve, reject) {
        var messageToSend = void 0;

        switch (messageType) {
          case _constants.CALL_MESSAGE:
            _this2.requests[messageId] = [onResponse, onRejectResponse];
            var commandName = command.getCommandName();

            messageToSend = (0, _stringify2.default)([messageType, messageId, commandName, commandValues]);
            break;
          case _constants.CALLRESULT_MESSAGE:
            messageToSend = (0, _stringify2.default)([messageType, messageId, commandValues]);
            break;
          case _constants.CALLERROR_MESSAGE:
            var code = command.code,
                message = command.message,
                details = command.details;

            messageToSend = (0, _stringify2.default)([messageType, messageId, code, message, details]);
            break;
        }

        debug('<< ' + messageToSend);
        if (socket.readyState === _ws2.default.OPEN) {
          socket.send(messageToSend);
        } else {
          return onRejectResponse('Socket closed ' + messageId);
        }
        if (messageType !== _constants.CALL_MESSAGE) {
          resolve();
        } else {
          setTimeout(function () {
            return onRejectResponse('Timeout for message ' + messageId);
          }, _constants.SOCKET_TIMEOUT);
        }

        function onResponse(payload) {
          var response = command.createResponse(payload);

          return resolve(response);
        }
        function onRejectResponse(reason) {
          self.requests[messageId] = function () {};
          var error = reason instanceof _ocppError2.default ? reason : new Error(reason);
          reject(error);
        }
      });
    }
  }, {
    key: 'onRequest',
    value: function onRequest(request) {}
  }]);
  return Connection;
}();
//# sourceMappingURL=connection.js.map