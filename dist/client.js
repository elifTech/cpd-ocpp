'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _request = require('./request');

var _response = require('./response');

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Client = function () {
  function Client(options) {
    (0, _classCallCheck3.default)(this, Client);

    this.options = options;
  }

  (0, _createClass3.default)(Client, [{
    key: 'connect',
    value: function connect() {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this.ws = new _ws2.default(_this.options.serverUrl, {
          perMessageDeflate: false,
          protocol: 'ocpp1.5',
          protocolVersion: 13
        });

        _this.ws.on('message', function (data) {
          return _this.onResponse(data);
        });

        _this.ws.on('open', function () {
          return resolve();
        });

        _this.ws.on('error', reject);

        return _this.ws;
      });
    }
  }, {
    key: 'send',
    value: function send(command) {
      var requestMessageId = (0, _v2.default)();
      var socket = this.ws;

      return new _promise2.default(function (resolve, reject) {
        socket.addListener('message', onMessage);

        socket.send(_request.Request.toMessage(requestMessageId, command));

        function onMessage(message) {
          var _Response$parseMessag = _response.Response.parseMessage(message),
              _Response$parseMessag2 = (0, _slicedToArray3.default)(_Response$parseMessag, 3),
              messageType = _Response$parseMessag2[0],
              messageId = _Response$parseMessag2[1],
              payload = _Response$parseMessag2[2];

          if (messageId !== requestMessageId) {
            return;
          }
          socket.removeListener('message', onMessage);

          switch (messageType) {
            case _constants.CALLRESULT_MESSAGE:
              return resolve(command.createResponse(payload));
            case _constants.CALLERROR_MESSAGE:
              return reject(payload);
            default:
              return reject(new Error('Unknown message type ' + messageType));
          }
        }
      });
    }
  }, {
    key: 'onResponse',
    value: function onResponse(data) {
      console.info(data);
    }
  }]);
  return Client;
}();

exports.default = Client;
//# sourceMappingURL=client.js.map