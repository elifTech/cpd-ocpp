'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _commands = require('./commands');

var _commands2 = _interopRequireDefault(_commands);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Request = exports.Request = function () {
  function Request() {
    (0, _classCallCheck3.default)(this, Request);
  }

  (0, _createClass3.default)(Request, null, [{
    key: 'fromMessage',
    value: function fromMessage(message) {
      var messageType = void 0,
          messageId = void 0,
          commandName = void 0,
          commandPayload = void 0;
      try {
        var _JSON$parse = JSON.parse(message);

        var _JSON$parse2 = (0, _slicedToArray3.default)(_JSON$parse, 4);

        messageType = _JSON$parse2[0];
        messageId = _JSON$parse2[1];
        commandName = _JSON$parse2[2];
        commandPayload = _JSON$parse2[3];
      } catch (err) {
        throw new Error('Failed to parse message: "' + message + '", ' + err.message);
      }
      if (messageType !== _constants.CALL_MESSAGE) {
        throw new Error('Wront reqeust type ' + messageType);
      }
      if (!_commands2.default[commandName]) {
        throw new Error('Unknown command ' + commandName);
      }
      var CommandModel = _commands2.default[commandName];
      var command = new CommandModel(commandPayload);

      return [messageId, command];
    }
  }, {
    key: 'toMessage',
    value: function toMessage(messageId, command) {
      var commandName = command.getCommandName();
      var commandValues = command.getCommandValues();

      return (0, _stringify2.default)([_constants.CALL_MESSAGE, messageId, commandName, commandValues]);
    }
  }]);
  return Request;
}();
//# sourceMappingURL=request.js.map