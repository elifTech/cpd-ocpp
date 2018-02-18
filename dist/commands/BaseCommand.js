'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RESPONSE_SCHEMA_SYMBOL = (0, _symbol2.default)('responseSchema');

var BaseCommand = function () {
  function BaseCommand(requestSchema, responseSchema, values) {
    (0, _classCallCheck3.default)(this, BaseCommand);

    this[RESPONSE_SCHEMA_SYMBOL] = responseSchema;

    (0, _helpers.applyPropertiesValidators)(this, requestSchema, values);
  }

  (0, _createClass3.default)(BaseCommand, [{
    key: 'getCommandName',
    value: function getCommandName() {
      return this.constructor.name;
    }
  }, {
    key: 'createResponse',
    value: function createResponse(payload) {
      var response = new function () {}();

      (0, _helpers.applyPropertiesValidators)(response, this[RESPONSE_SCHEMA_SYMBOL], payload);

      return response;
    }
  }]);
  return BaseCommand;
}();

exports.default = BaseCommand;
//# sourceMappingURL=BaseCommand.js.map