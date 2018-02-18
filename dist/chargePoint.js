'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _connection = require('./connection');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)(_constants.DEBUG_LIBNAME);

var ChargePoint = function () {
  /**
   * Create OCPP client
   *
   * @param {Object} options Configuration options
   * @param {String} options.centralSystemUrl The url where to connect
   * @param {String} options.reconnectInterval The number of milliseconds to delay before attempting to reconnect (default: 5 minutes)
   */
  function ChargePoint(options) {
    (0, _classCallCheck3.default)(this, ChargePoint);

    this.options = options;
  }

  (0, _createClass3.default)(ChargePoint, [{
    key: 'connect',
    value: function connect() {
      var _this = this;

      debug('Try connect to ' + this.options.centralSystemUrl);

      var reconnectTimer = void 0;
      var reconnectInterval = this.options.reconnectInterval || 5 * 60 * 1000; // 5 minutes
      var self = this;

      return new _promise2.default(function (resolve, reject) {
        var ws = new _ws2.default(_this.options.centralSystemUrl, [_constants.OCPP_PROTOCOL_1_6], {
          perMessageDeflate: false,
          protocolVersion: 13
        });

        ws.on('upgrade', function (res) {
          if (!res.headers['sec-websocket-protocol']) {
            return reject(new Error('Server doesn\'t support protocol ' + _constants.OCPP_PROTOCOL_1_6));
          }
        });

        ws.on('close', function () {
          debug('Connection is closed');
          _this.connection = null;
          nextReconnectAttempt();
        });
        ws.on('open', function () {
          ws.removeAllListeners('error');

          _this.connection = new _connection.Connection(ws);
          _this.connection.onRequest = function (command) {
            return _this.onRequest(command);
          };

          resolve(_this.connection);
        });

        ws.on('error', reject);
      });

      function nextReconnectAttempt() {
        var _this2 = this;

        if (reconnectTimer) {
          clearInterval(reconnectTimer);
          reconnectTimer = null;
        }

        reconnectTimer = setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return self.connect();

                case 3:
                  _context.next = 7;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context['catch'](0);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 5]]);
        })), reconnectInterval);
      }
    }
  }, {
    key: 'send',
    value: function send(command) {
      if (!this.connection) {
        return false;
      }
      return this.connection.send(command);
    }
  }, {
    key: 'onRequest',
    value: function onRequest(command) {}
  }]);
  return ChargePoint;
}();

exports.default = ChargePoint;
//# sourceMappingURL=chargePoint.js.map