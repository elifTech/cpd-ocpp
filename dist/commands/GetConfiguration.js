'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetConfiguration = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseCommand2 = require('./BaseCommand');

var _BaseCommand3 = _interopRequireDefault(_BaseCommand2);

var _GetConfiguration = require('../../ocpp-1.6-schemas/GetConfiguration');

var _GetConfiguration2 = _interopRequireDefault(_GetConfiguration);

var _GetConfigurationResponse = require('../../ocpp-1.6-schemas/GetConfigurationResponse');

var _GetConfigurationResponse2 = _interopRequireDefault(_GetConfigurationResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetConfiguration = exports.GetConfiguration = function (_BaseCommand) {
  (0, _inherits3.default)(GetConfiguration, _BaseCommand);

  function GetConfiguration(values) {
    (0, _classCallCheck3.default)(this, GetConfiguration);
    return (0, _possibleConstructorReturn3.default)(this, (GetConfiguration.__proto__ || (0, _getPrototypeOf2.default)(GetConfiguration)).call(this, _GetConfiguration2.default, _GetConfigurationResponse2.default, values));
  }

  return GetConfiguration;
}(_BaseCommand3.default);
//# sourceMappingURL=GetConfiguration.js.map