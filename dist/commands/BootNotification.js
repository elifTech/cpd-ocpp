'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootNotification = exports.STATUS_REJECTED = exports.STATUS_PENDING = exports.STATUS_ACCEPTED = undefined;

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

var _BootNotification = require('../../ocpp-1.6-schemas/BootNotification');

var _BootNotification2 = _interopRequireDefault(_BootNotification);

var _BootNotificationResponse = require('../../ocpp-1.6-schemas/BootNotificationResponse');

var _BootNotificationResponse2 = _interopRequireDefault(_BootNotificationResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_PENDING = exports.STATUS_PENDING = 'Pending';
var STATUS_REJECTED = exports.STATUS_REJECTED = 'Rejected';

var BootNotification = exports.BootNotification = function (_BaseCommand) {
  (0, _inherits3.default)(BootNotification, _BaseCommand);

  function BootNotification(values) {
    (0, _classCallCheck3.default)(this, BootNotification);
    return (0, _possibleConstructorReturn3.default)(this, (BootNotification.__proto__ || (0, _getPrototypeOf2.default)(BootNotification)).call(this, _BootNotification2.default, _BootNotificationResponse2.default, values));
  }

  return BootNotification;
}(_BaseCommand3.default);
//# sourceMappingURL=BootNotification.js.map