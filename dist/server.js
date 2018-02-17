'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _request = require('./request');

var _response = require('./response');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Server = function () {
  function Server(options) {
    (0, _classCallCheck3.default)(this, Server);

    this.options = options;
  }

  (0, _createClass3.default)(Server, [{
    key: 'listen',
    value: function listen() {
      var _this = this;

      var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9220;

      this.port = port;

      this.server = new _ws2.default.Server({ port: port });

      this.server.on('connection', function (ws) {
        return _this.onNewConnection(ws);
      });

      console.log('[OCPPServer] Listen on ' + port);
    }
  }, {
    key: 'onNewConnection',
    value: function onNewConnection(socket) {
      var _this2 = this;

      console.info('new connection');

      socket.on('message', function (msg) {
        return _this2.onMessage(socket, msg);
      });
    }
  }, {
    key: 'onMessage',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(socket, message) {
        var _Request$fromMessage, _Request$fromMessage2, messageId, requestCommand, responseData, response;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _Request$fromMessage = _request.Request.fromMessage(message), _Request$fromMessage2 = (0, _slicedToArray3.default)(_Request$fromMessage, 2), messageId = _Request$fromMessage2[0], requestCommand = _Request$fromMessage2[1];
                _context.next = 4;
                return this.onRequest(requestCommand);

              case 4:
                responseData = _context.sent;
                response = requestCommand.createResponse(responseData);


                socket.send(_response.Response.toMessage(messageId, response));
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);

                console.info(_context.t0.message);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function onMessage(_x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return onMessage;
    }()
  }, {
    key: 'onRequest',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(request, response) {
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

      function onRequest(_x4, _x5) {
        return _ref2.apply(this, arguments);
      }

      return onRequest;
    }()
  }]);
  return Server;
}();

exports.default = Server;
//# sourceMappingURL=server.js.map