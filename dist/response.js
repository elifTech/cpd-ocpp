'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Response = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Response = exports.Response = function () {
  function Response() {
    (0, _classCallCheck3.default)(this, Response);
  }

  (0, _createClass3.default)(Response, null, [{
    key: 'parseMessage',
    value: function parseMessage(message) {
      var messageType = void 0,
          messageId = void 0,
          payload = void 0;
      try {
        var _JSON$parse = JSON.parse(message);

        var _JSON$parse2 = (0, _slicedToArray3.default)(_JSON$parse, 3);

        messageType = _JSON$parse2[0];
        messageId = _JSON$parse2[1];
        payload = _JSON$parse2[2];
      } catch (err) {
        throw new Error('Failed to parse message: "' + message + '", ' + err.message);
      }
      return [messageType, messageId, payload];
    }
  }, {
    key: 'toMessage',
    value: function toMessage(messageId, payload) {
      var messageType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.CALLRESULT_MESSAGE;

      return (0, _stringify2.default)([messageType, messageId, payload]);
    }
  }]);
  return Response;
}();
//# sourceMappingURL=response.js.map