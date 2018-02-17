'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CancelReservation = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = undefined;

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

var _CancelReservation = require('../../ocpp-1.6-schemas/CancelReservation');

var _CancelReservation2 = _interopRequireDefault(_CancelReservation);

var _CancelReservationResponse = require('../../ocpp-1.6-schemas/CancelReservationResponse');

var _CancelReservationResponse2 = _interopRequireDefault(_CancelReservationResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_REJECTED = exports.STATUS_REJECTED = 'Rejected';

var CancelReservation = exports.CancelReservation = function (_BaseCommand) {
  (0, _inherits3.default)(CancelReservation, _BaseCommand);

  function CancelReservation(values) {
    (0, _classCallCheck3.default)(this, CancelReservation);
    return (0, _possibleConstructorReturn3.default)(this, (CancelReservation.__proto__ || (0, _getPrototypeOf2.default)(CancelReservation)).call(this, _CancelReservation2.default, _CancelReservationResponse2.default, values));
  }

  return CancelReservation;
}(_BaseCommand3.default);
//# sourceMappingURL=CancelReservation.js.map