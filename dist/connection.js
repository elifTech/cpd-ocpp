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

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _commands = require('./commands');

var _commands2 = _interopRequireDefault(_commands);

var _constants = require('./constants');

var _helpers = require('./helpers');

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
        var messageType, messageId, commandNameOrPayload, commandPayload, _JSON$parse, _JSON$parse2, CommandModel, commandRequest, responseData, responseObj, responseCallback;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                messageType = void 0, messageId = void 0, commandNameOrPayload = void 0, commandPayload = void 0;
                _context.prev = 1;
                _JSON$parse = JSON.parse(message);
                _JSON$parse2 = (0, _slicedToArray3.default)(_JSON$parse, 4);
                messageType = _JSON$parse2[0];
                messageId = _JSON$parse2[1];
                commandNameOrPayload = _JSON$parse2[2];
                commandPayload = _JSON$parse2[3];
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](1);
                throw new Error('Failed to parse message: "' + message + '", ' + _context.t0.message);

              case 13:
                _context.t1 = messageType;
                _context.next = _context.t1 === _constants.CALL_MESSAGE ? 16 : _context.t1 === _constants.CALLRESULT_MESSAGE ? 27 : _context.t1 === _constants.CALLERROR_MESSAGE ? 27 : 34;
                break;

              case 16:
                // request
                debug('>> ' + this.url + ': ' + message);

                CommandModel = _commands2.default[commandNameOrPayload];

                if (CommandModel) {
                  _context.next = 20;
                  break;
                }

                throw new Error('Unknown command ' + commandNameOrPayload);

              case 20:
                commandRequest = new CommandModel(commandPayload);
                _context.next = 23;
                return this.onRequest(commandRequest);

              case 23:
                responseData = _context.sent;
                responseObj = commandRequest.createResponse(responseData);


                this.sendMessage(messageId, responseObj, _constants.CALLRESULT_MESSAGE);
                return _context.abrupt('break', 35);

              case 27:
                // response
                debug('>> ' + this.url + ': ' + message);

                responseCallback = this.requests[messageId];

                if (responseCallback) {
                  _context.next = 31;
                  break;
                }

                throw new Error('Response for unknown message ' + messageId);

              case 31:
                delete this.requests[messageId];

                responseCallback(commandNameOrPayload);
                return _context.abrupt('break', 35);

              case 34:
                throw new Error('Wrong message type ' + messageType);

              case 35:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
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
    key: 'sendMessage',
    value: function sendMessage(messageId, command) {
      var _this2 = this;

      var messageType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.CALLRESULT_MESSAGE;

      var socket = this.socket;

      var commandValues = (0, _helpers.getObjectValues)(command);

      return new _promise2.default(function (resolve, reject) {
        _this2.requests[messageId] = onResponse;

        var messageToSend = void 0;

        switch (messageType) {
          case _constants.CALL_MESSAGE:
            var commandName = command.getCommandName();

            messageToSend = (0, _stringify2.default)([messageType, messageId, commandName, commandValues]);
            break;
          case _constants.CALLRESULT_MESSAGE:
          case _constants.CALLERROR_MESSAGE:
            messageToSend = (0, _stringify2.default)([messageType, messageId, commandValues]);
            break;
        }

        debug('<< ' + messageToSend);
        socket.send(messageToSend);

        function onResponse(payload) {
          var response = command.createResponse(payload);

          return resolve(response);
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