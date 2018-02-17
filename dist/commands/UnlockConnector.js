'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnlockConnector = exports.STATUS_NOTSUPPORTED = exports.STATUS_UNLOCKFAILED = exports.STATUS_UNLOCKED = undefined;

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

var _UnlockConnector = require('../../ocpp-1.6-schemas/UnlockConnector');

var _UnlockConnector2 = _interopRequireDefault(_UnlockConnector);

var _UnlockConnectorResponse = require('../../ocpp-1.6-schemas/UnlockConnectorResponse');

var _UnlockConnectorResponse2 = _interopRequireDefault(_UnlockConnectorResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_UNLOCKED = exports.STATUS_UNLOCKED = 'Unlocked';
var STATUS_UNLOCKFAILED = exports.STATUS_UNLOCKFAILED = 'UnlockFailed';
var STATUS_NOTSUPPORTED = exports.STATUS_NOTSUPPORTED = 'NotSupported';

var UnlockConnector = exports.UnlockConnector = function (_BaseCommand) {
  (0, _inherits3.default)(UnlockConnector, _BaseCommand);

  function UnlockConnector(values) {
    (0, _classCallCheck3.default)(this, UnlockConnector);
    return (0, _possibleConstructorReturn3.default)(this, (UnlockConnector.__proto__ || (0, _getPrototypeOf2.default)(UnlockConnector)).call(this, _UnlockConnector2.default, _UnlockConnectorResponse2.default, values));
  }

  return UnlockConnector;
}(_BaseCommand3.default);
//# sourceMappingURL=UnlockConnector.js.map