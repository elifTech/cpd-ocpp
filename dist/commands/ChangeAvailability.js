'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeAvailability = exports.STATUS_SCHEDULED = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = exports.TYPE_OPERATIVE = exports.TYPE_INOPERATIVE = undefined;

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

var _ChangeAvailability = require('../../ocpp-1.6-schemas/ChangeAvailability');

var _ChangeAvailability2 = _interopRequireDefault(_ChangeAvailability);

var _ChangeAvailabilityResponse = require('../../ocpp-1.6-schemas/ChangeAvailabilityResponse');

var _ChangeAvailabilityResponse2 = _interopRequireDefault(_ChangeAvailabilityResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE_INOPERATIVE = exports.TYPE_INOPERATIVE = 'Inoperative';
var TYPE_OPERATIVE = exports.TYPE_OPERATIVE = 'Operative';

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_REJECTED = exports.STATUS_REJECTED = 'Rejected';
var STATUS_SCHEDULED = exports.STATUS_SCHEDULED = 'Scheduled';

var ChangeAvailability = exports.ChangeAvailability = function (_BaseCommand) {
  (0, _inherits3.default)(ChangeAvailability, _BaseCommand);

  function ChangeAvailability(values) {
    (0, _classCallCheck3.default)(this, ChangeAvailability);
    return (0, _possibleConstructorReturn3.default)(this, (ChangeAvailability.__proto__ || (0, _getPrototypeOf2.default)(ChangeAvailability)).call(this, _ChangeAvailability2.default, _ChangeAvailabilityResponse2.default, values));
  }

  return ChangeAvailability;
}(_BaseCommand3.default);
//# sourceMappingURL=ChangeAvailability.js.map