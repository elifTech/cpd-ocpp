'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReserveNow = exports.STATUS_UNAVAILABLE = exports.STATUS_REJECTED = exports.STATUS_OCCUPIED = exports.STATUS_FAULTED = exports.STATUS_ACCEPTED = undefined;

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

var _ReserveNow = require('../../ocpp-1.6-schemas/ReserveNow');

var _ReserveNow2 = _interopRequireDefault(_ReserveNow);

var _ReserveNowResponse = require('../../ocpp-1.6-schemas/ReserveNowResponse');

var _ReserveNowResponse2 = _interopRequireDefault(_ReserveNowResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_FAULTED = exports.STATUS_FAULTED = 'Faulted';
var STATUS_OCCUPIED = exports.STATUS_OCCUPIED = 'Occupied';
var STATUS_REJECTED = exports.STATUS_REJECTED = 'Rejected';
var STATUS_UNAVAILABLE = exports.STATUS_UNAVAILABLE = 'Unavailable';

var ReserveNow = exports.ReserveNow = function (_BaseCommand) {
  (0, _inherits3.default)(ReserveNow, _BaseCommand);

  function ReserveNow(values) {
    (0, _classCallCheck3.default)(this, ReserveNow);
    return (0, _possibleConstructorReturn3.default)(this, (ReserveNow.__proto__ || (0, _getPrototypeOf2.default)(ReserveNow)).call(this, _ReserveNow2.default, _ReserveNowResponse2.default, values));
  }

  return ReserveNow;
}(_BaseCommand3.default);
//# sourceMappingURL=ReserveNow.js.map