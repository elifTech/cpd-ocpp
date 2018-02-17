'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetChargingProfile = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = exports.CHARGING_RATE_UNIT_W = exports.CHARGING_RATE_UNIT_A = exports.RECURRENCY_KIND_WEEKLY = exports.RECURRENCY_KIND_DAILY = exports.CHARGING_PROFILE_KIND_RELATIVE = exports.CHARGING_PROFILE_KIND_RECURRING = exports.CHARGING_PROFILE_KIND_ABSOLUTE = exports.CHARGING_PROFILE_PURPOSE_TXPROFILE = exports.CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = exports.CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = undefined;

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

var _SetChargingProfile = require('../../ocpp-1.6-schemas/SetChargingProfile');

var _SetChargingProfile2 = _interopRequireDefault(_SetChargingProfile);

var _SetChargingProfileResponse = require('../../ocpp-1.6-schemas/SetChargingProfileResponse');

var _SetChargingProfileResponse2 = _interopRequireDefault(_SetChargingProfileResponse);

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

var SetChargingProfile = exports.SetChargingProfile = function (_BaseCommand) {
  (0, _inherits3.default)(SetChargingProfile, _BaseCommand);

  function SetChargingProfile(values) {
    (0, _classCallCheck3.default)(this, SetChargingProfile);
    return (0, _possibleConstructorReturn3.default)(this, (SetChargingProfile.__proto__ || (0, _getPrototypeOf2.default)(SetChargingProfile)).call(this, _SetChargingProfile2.default, _SetChargingProfileResponse2.default, values));
  }

  return SetChargingProfile;
}(_BaseCommand3.default);
//# sourceMappingURL=SetChargingProfile.js.map