'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGGER_URL = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

var _constants = require('./constants');

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _debug = (0, _debug3.default)(_constants.DEBUG_LIBNAME);

var LOGGER_URL = exports.LOGGER_URL = '/logger';

var COUNT_MESSAGE_TO_STORE = 10;

var Logger = function () {
  function Logger() {
    (0, _classCallCheck3.default)(this, Logger);

    this.sockets = [];
    this.messages = [];
  }

  (0, _createClass3.default)(Logger, [{
    key: 'addSocket',
    value: function addSocket(socket) {
      this.sockets.push(socket);
      console.info('add');
      socket.send((0, _stringify2.default)({ command: 'history', messages: this.messages }));
    }
  }, {
    key: 'debug',
    value: function debug(message) {
      if (typeof message !== 'string') {
        message = (0, _stringify2.default)(message);
      }
      this.messages.push(message);
      if (this.messages.length > COUNT_MESSAGE_TO_STORE) {
        this.messages = this.messages.slice(this.messages.length - COUNT_MESSAGE_TO_STORE, this.messages.length);
      }

      _debug(message);
      this.sendMessage({ command: 'message', message: message });
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage(messageToSend) {
      if (typeof messageToSend !== 'string') {
        messageToSend = (0, _stringify2.default)(messageToSend);
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.sockets), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var socket = _step.value;

          if (socket.readyState === _ws2.default.OPEN) {
            socket.send(messageToSend);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);
  return Logger;
}();

exports.default = Logger;
//# sourceMappingURL=logger.js.map