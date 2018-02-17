'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeConfiguration = exports.STATUS_NOTSUPPORTED = exports.STATUS_REBOOTREQUIRED = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = undefined;

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

var _ChangeConfiguration = require('../../ocpp-1.6-schemas/ChangeConfiguration');

var _ChangeConfiguration2 = _interopRequireDefault(_ChangeConfiguration);

var _ChangeConfigurationResponse = require('../../ocpp-1.6-schemas/ChangeConfigurationResponse');

var _ChangeConfigurationResponse2 = _interopRequireDefault(_ChangeConfigurationResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_REJECTED = exports.STATUS_REJECTED = 'Rejected';
var STATUS_REBOOTREQUIRED = exports.STATUS_REBOOTREQUIRED = 'RebootRequired';
var STATUS_NOTSUPPORTED = exports.STATUS_NOTSUPPORTED = 'NotSupported';

var ChangeConfiguration = exports.ChangeConfiguration = function (_BaseCommand) {
  (0, _inherits3.default)(ChangeConfiguration, _BaseCommand);

  function ChangeConfiguration(values) {
    (0, _classCallCheck3.default)(this, ChangeConfiguration);
    return (0, _possibleConstructorReturn3.default)(this, (ChangeConfiguration.__proto__ || (0, _getPrototypeOf2.default)(ChangeConfiguration)).call(this, _ChangeConfiguration2.default, _ChangeConfigurationResponse2.default, values));
  }

  return ChangeConfiguration;
}(_BaseCommand3.default);
//# sourceMappingURL=ChangeConfiguration.js.map