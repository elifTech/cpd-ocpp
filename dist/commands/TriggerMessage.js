'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TriggerMessage = exports.STATUS_NOTIMPLEMENTED = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = exports.REQUESTED_MESSAGE_STATUSNOTIFICATION = exports.REQUESTED_MESSAGE_METERVALUES = exports.REQUESTED_MESSAGE_HEARTBEAT = exports.REQUESTED_MESSAGE_FIRMWARESTATUSNOTIFICATION = exports.REQUESTED_MESSAGE_DIAGNOSTICSSTATUSNOTIFICATION = exports.REQUESTED_MESSAGE_BOOTNOTIFICATION = undefined;

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

var _TriggerMessage = require('../../ocpp-1.6-schemas/TriggerMessage');

var _TriggerMessage2 = _interopRequireDefault(_TriggerMessage);

var _TriggerMessageResponse = require('../../ocpp-1.6-schemas/TriggerMessageResponse');

var _TriggerMessageResponse2 = _interopRequireDefault(_TriggerMessageResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUESTED_MESSAGE_BOOTNOTIFICATION = exports.REQUESTED_MESSAGE_BOOTNOTIFICATION = 'BootNotification';
var REQUESTED_MESSAGE_DIAGNOSTICSSTATUSNOTIFICATION = exports.REQUESTED_MESSAGE_DIAGNOSTICSSTATUSNOTIFICATION = 'DiagnosticsStatusNotification';
var REQUESTED_MESSAGE_FIRMWARESTATUSNOTIFICATION = exports.REQUESTED_MESSAGE_FIRMWARESTATUSNOTIFICATION = 'FirmwareStatusNotification';
var REQUESTED_MESSAGE_HEARTBEAT = exports.REQUESTED_MESSAGE_HEARTBEAT = 'Heartbeat';
var REQUESTED_MESSAGE_METERVALUES = exports.REQUESTED_MESSAGE_METERVALUES = 'MeterValues';
var REQUESTED_MESSAGE_STATUSNOTIFICATION = exports.REQUESTED_MESSAGE_STATUSNOTIFICATION = 'StatusNotification';

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_REJECTED = exports.STATUS_REJECTED = 'Rejected';
var STATUS_NOTIMPLEMENTED = exports.STATUS_NOTIMPLEMENTED = 'NotImplemented';

var TriggerMessage = exports.TriggerMessage = function (_BaseCommand) {
  (0, _inherits3.default)(TriggerMessage, _BaseCommand);

  function TriggerMessage(values) {
    (0, _classCallCheck3.default)(this, TriggerMessage);
    return (0, _possibleConstructorReturn3.default)(this, (TriggerMessage.__proto__ || (0, _getPrototypeOf2.default)(TriggerMessage)).call(this, _TriggerMessage2.default, _TriggerMessageResponse2.default, values));
  }

  return TriggerMessage;
}(_BaseCommand3.default);
//# sourceMappingURL=TriggerMessage.js.map