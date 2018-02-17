'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoteStartTransaction = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = exports.CHARGING_RATE_UNIT_W = exports.CHARGING_RATE_UNIT_A = exports.RECURRENCY_KIND_WEEKLY = exports.RECURRENCY_KIND_DAILY = exports.CHARGING_PROFILE_KIND_RELATIVE = exports.CHARGING_PROFILE_KIND_RECURRING = exports.CHARGING_PROFILE_KIND_ABSOLUTE = exports.CHARGING_PROFILE_PURPOSE_TXPROFILE = exports.CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = exports.CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = undefined;

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

var _RemoteStartTransaction = require('../../ocpp-1.6-schemas/RemoteStartTransaction');

var _RemoteStartTransaction2 = _interopRequireDefault(_RemoteStartTransaction);

var _RemoteStartTransactionResponse = require('../../ocpp-1.6-schemas/RemoteStartTransactionResponse');

var _RemoteStartTransactionResponse2 = _interopRequireDefault(_RemoteStartTransactionResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = exports.CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = 'ChargePointMaxProfile';
var CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = exports.CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = 'TxDefaultProfile';
var CHARGING_PROFILE_PURPOSE_TXPROFILE = exports.CHARGING_PROFILE_PURPOSE_TXPROFILE = 'TxProfile';

var CHARGING_PROFILE_KIND_ABSOLUTE = exports.CHARGING_PROFILE_KIND_ABSOLUTE = 'Absolute';
var CHARGING_PROFILE_KIND_RECURRING = exports.CHARGING_PROFILE_KIND_RECURRING = 'Recurring';
var CHARGING_PROFILE_KIND_RELATIVE = exports.CHARGING_PROFILE_KIND_RELATIVE = 'Relative';

var RECURRENCY_KIND_DAILY = exports.RECURRENCY_KIND_DAILY = 'Daily';
var RECURRENCY_KIND_WEEKLY = exports.RECURRENCY_KIND_WEEKLY = 'Weekly';

var CHARGING_RATE_UNIT_A = exports.CHARGING_RATE_UNIT_A = 'A';
var CHARGING_RATE_UNIT_W = exports.CHARGING_RATE_UNIT_W = 'W';

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_REJECTED = exports.STATUS_REJECTED = 'Rejected';

var RemoteStartTransaction = exports.RemoteStartTransaction = function (_BaseCommand) {
  (0, _inherits3.default)(RemoteStartTransaction, _BaseCommand);

  function RemoteStartTransaction(values) {
    (0, _classCallCheck3.default)(this, RemoteStartTransaction);
    return (0, _possibleConstructorReturn3.default)(this, (RemoteStartTransaction.__proto__ || (0, _getPrototypeOf2.default)(RemoteStartTransaction)).call(this, _RemoteStartTransaction2.default, _RemoteStartTransactionResponse2.default, values));
  }

  return RemoteStartTransaction;
}(_BaseCommand3.default);
//# sourceMappingURL=RemoteStartTransaction.js.map