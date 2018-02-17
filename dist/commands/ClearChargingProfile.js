'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearChargingProfile = exports.STATUS_UNKNOWN = exports.STATUS_ACCEPTED = exports.CHARGING_PROFILE_PURPOSE_TXPROFILE = exports.CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = exports.CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = undefined;

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

var _ClearChargingProfile = require('../../ocpp-1.6-schemas/ClearChargingProfile');

var _ClearChargingProfile2 = _interopRequireDefault(_ClearChargingProfile);

var _ClearChargingProfileResponse = require('../../ocpp-1.6-schemas/ClearChargingProfileResponse');

var _ClearChargingProfileResponse2 = _interopRequireDefault(_ClearChargingProfileResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = exports.CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = 'ChargePointMaxProfile';
var CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = exports.CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = 'TxDefaultProfile';
var CHARGING_PROFILE_PURPOSE_TXPROFILE = exports.CHARGING_PROFILE_PURPOSE_TXPROFILE = 'TxProfile';

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_UNKNOWN = exports.STATUS_UNKNOWN = 'Unknown';

var ClearChargingProfile = exports.ClearChargingProfile = function (_BaseCommand) {
  (0, _inherits3.default)(ClearChargingProfile, _BaseCommand);

  function ClearChargingProfile(values) {
    (0, _classCallCheck3.default)(this, ClearChargingProfile);
    return (0, _possibleConstructorReturn3.default)(this, (ClearChargingProfile.__proto__ || (0, _getPrototypeOf2.default)(ClearChargingProfile)).call(this, _ClearChargingProfile2.default, _ClearChargingProfileResponse2.default, values));
  }

  return ClearChargingProfile;
}(_BaseCommand3.default);
//# sourceMappingURL=ClearChargingProfile.js.map