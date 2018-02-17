'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCompositeSchedule = exports.CHARGING_RATE_UNIT_W = exports.CHARGING_RATE_UNIT_A = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = undefined;

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

var _GetCompositeSchedule = require('../../ocpp-1.6-schemas/GetCompositeSchedule');

var _GetCompositeSchedule2 = _interopRequireDefault(_GetCompositeSchedule);

var _GetCompositeScheduleResponse = require('../../ocpp-1.6-schemas/GetCompositeScheduleResponse');

var _GetCompositeScheduleResponse2 = _interopRequireDefault(_GetCompositeScheduleResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_REJECTED = exports.STATUS_REJECTED = 'Rejected';

var CHARGING_RATE_UNIT_A = exports.CHARGING_RATE_UNIT_A = 'A';
var CHARGING_RATE_UNIT_W = exports.CHARGING_RATE_UNIT_W = 'W';

var GetCompositeSchedule = exports.GetCompositeSchedule = function (_BaseCommand) {
  (0, _inherits3.default)(GetCompositeSchedule, _BaseCommand);

  function GetCompositeSchedule(values) {
    (0, _classCallCheck3.default)(this, GetCompositeSchedule);
    return (0, _possibleConstructorReturn3.default)(this, (GetCompositeSchedule.__proto__ || (0, _getPrototypeOf2.default)(GetCompositeSchedule)).call(this, _GetCompositeSchedule2.default, _GetCompositeScheduleResponse2.default, values));
  }

  return GetCompositeSchedule;
}(_BaseCommand3.default);
//# sourceMappingURL=GetCompositeSchedule.js.map