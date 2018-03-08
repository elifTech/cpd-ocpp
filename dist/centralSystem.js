'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _centralSystemClient = require('./centralSystemClient');

var _centralSystemClient2 = _interopRequireDefault(_centralSystemClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)(_constants.DEBUG_LIBNAME);

var CentralSystem = function () {
  function CentralSystem(options) {
    (0, _classCallCheck3.default)(this, CentralSystem);

    this.options = options || {};
    this.clients = [];
  }

  (0, _createClass3.default)(CentralSystem, [{
    key: 'listen',
    value: function listen() {
      var _this = this;

      var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9220;
      var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.port = port;

      var validateConnection = this.options.validateConnection || function () {
        return true;
      };

      var wsOptions = (0, _extends3.default)({
        port: port,
        host: host,
        handleProtocols: function handleProtocols(protocols, req) {
          if (protocols.indexOf(_constants.OCPP_PROTOCOL_1_6) === -1) {
            return '';
          }
          return _constants.OCPP_PROTOCOL_1_6;
        },
        verifyClient: function () {
          var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(info, cb) {
            var isAccept;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return validateConnection(info.req.url);

                  case 2:
                    isAccept = _context.sent;


                    debug('Request for connect "' + info.req.url + '" (' + info.req.headers['sec-websocket-protocol'] + ') - ' + (isAccept ? 'Valid identifier' : 'Invalid identifier'));

                    cb(isAccept, 404, 'Central System does not recognize the charge point identifier in the URL path');

                  case 5:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          function verifyClient(_x3, _x4) {
            return _ref.apply(this, arguments);
          }

          return verifyClient;
        }()
      }, this.options.wsOptions || {});

      this.server = new _ws2.default.Server(wsOptions);

      this.server.on('error', function (ws, req) {
        console.info(ws, req);
      });

      this.server.on('upgrade', function (ws, req) {
        console.info(req);
      });
      this.server.on('connection', function (ws, req) {
        return _this.onNewConnection(ws, req);
      });

      debug('Listen on ' + (host || 'default host') + ':' + port);
    }
  }, {
    key: 'onNewConnection',
    value: function onNewConnection(socket, req) {
      var _this2 = this;

      socket.on('error', function (err) {
        console.info(err, socket.readyState);
      });

      if (!socket.protocol) {
        // From Spec: If the Central System does not agree to using one of the subprotocols offered by the client,
        // it MUST complete the WebSocket handshake with a response without a Sec-WebSocket-Protocol header and then
        // immediately close the WebSocket connection.
        debug('Close connection due to unsupported protocol');
        return socket.close();
      }

      var connection = new _connection.Connection(socket, req);

      var client = new _centralSystemClient2.default(connection);

      connection.onRequest = function (command) {
        return _this2.onRequest(client, command);
      };

      socket.on('close', function (err) {
        var index = _this2.clients.indexOf(client);
        _this2.clients.splice(index, 1);
      });
      this.clients.push(client);
    }
  }, {
    key: 'onRequest',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(client, command) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onRequest(_x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return onRequest;
    }()
  }]);
  return CentralSystem;
}();

exports.default = CentralSystem;
//# sourceMappingURL=centralSystem.js.map