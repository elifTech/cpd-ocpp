'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusNotification = exports.STATUS_FAULTED = exports.STATUS_UNAVAILABLE = exports.STATUS_RESERVED = exports.STATUS_FINISHING = exports.STATUS_SUSPENDEDEV = exports.STATUS_SUSPENDEDEVSE = exports.STATUS_CHARGING = exports.STATUS_PREPARING = exports.STATUS_AVAILABLE = exports.ERRORCODE_WEAKSIGNAL = exports.ERRORCODE_OVERVOLTAGE = exports.ERRORCODE_UNDERVOLTAGE = exports.ERRORCODE_RESETFAILURE = exports.ERRORCODE_READERFAILURE = exports.ERRORCODE_POWERSWITCHFAILURE = exports.ERRORCODE_POWERMETERFAILURE = exports.ERRORCODE_OVERCURRENTFAILURE = exports.ERRORCODE_OTHERERROR = exports.ERRORCODE_NOERROR = exports.ERRORCODE_LOCALLISTCONFLICT = exports.ERRORCODE_INTERNALERROR = exports.ERRORCODE_HIGHTEMPERATURE = exports.ERRORCODE_GROUNDFAILURE = exports.ERRORCODE_EVCOMMUNICATIONERROR = exports.ERRORCODE_CONNECTORLOCKFAILURE = undefined;

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

var _StatusNotification = require('../../ocpp-1.6-schemas/StatusNotification');

var _StatusNotification2 = _interopRequireDefault(_StatusNotification);

var _StatusNotificationResponse = require('../../ocpp-1.6-schemas/StatusNotificationResponse');

var _StatusNotificationResponse2 = _interopRequireDefault(_StatusNotificationResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERRORCODE_CONNECTORLOCKFAILURE = exports.ERRORCODE_CONNECTORLOCKFAILURE = 'ConnectorLockFailure';
var ERRORCODE_EVCOMMUNICATIONERROR = exports.ERRORCODE_EVCOMMUNICATIONERROR = 'EVCommunicationError';
var ERRORCODE_GROUNDFAILURE = exports.ERRORCODE_GROUNDFAILURE = 'GroundFailure';
var ERRORCODE_HIGHTEMPERATURE = exports.ERRORCODE_HIGHTEMPERATURE = 'HighTemperature';
var ERRORCODE_INTERNALERROR = exports.ERRORCODE_INTERNALERROR = 'InternalError';
var ERRORCODE_LOCALLISTCONFLICT = exports.ERRORCODE_LOCALLISTCONFLICT = 'LocalListConflict';
var ERRORCODE_NOERROR = exports.ERRORCODE_NOERROR = 'NoError';
var ERRORCODE_OTHERERROR = exports.ERRORCODE_OTHERERROR = 'OtherError';
var ERRORCODE_OVERCURRENTFAILURE = exports.ERRORCODE_OVERCURRENTFAILURE = 'OverCurrentFailure';
var ERRORCODE_POWERMETERFAILURE = exports.ERRORCODE_POWERMETERFAILURE = 'PowerMeterFailure';
var ERRORCODE_POWERSWITCHFAILURE = exports.ERRORCODE_POWERSWITCHFAILURE = 'PowerSwitchFailure';
var ERRORCODE_READERFAILURE = exports.ERRORCODE_READERFAILURE = 'ReaderFailure';
var ERRORCODE_RESETFAILURE = exports.ERRORCODE_RESETFAILURE = 'ResetFailure';
var ERRORCODE_UNDERVOLTAGE = exports.ERRORCODE_UNDERVOLTAGE = 'UnderVoltage';
var ERRORCODE_OVERVOLTAGE = exports.ERRORCODE_OVERVOLTAGE = 'OverVoltage';
var ERRORCODE_WEAKSIGNAL = exports.ERRORCODE_WEAKSIGNAL = 'WeakSignal';

var STATUS_AVAILABLE = exports.STATUS_AVAILABLE = 'Available';
var STATUS_PREPARING = exports.STATUS_PREPARING = 'Preparing';
var STATUS_CHARGING = exports.STATUS_CHARGING = 'Charging';
var STATUS_SUSPENDEDEVSE = exports.STATUS_SUSPENDEDEVSE = 'SuspendedEVSE';
var STATUS_SUSPENDEDEV = exports.STATUS_SUSPENDEDEV = 'SuspendedEV';
var STATUS_FINISHING = exports.STATUS_FINISHING = 'Finishing';
var STATUS_RESERVED = exports.STATUS_RESERVED = 'Reserved';
var STATUS_UNAVAILABLE = exports.STATUS_UNAVAILABLE = 'Unavailable';
var STATUS_FAULTED = exports.STATUS_FAULTED = 'Faulted';

var StatusNotification = exports.StatusNotification = function (_BaseCommand) {
  (0, _inherits3.default)(StatusNotification, _BaseCommand);

  function StatusNotification(values) {
    (0, _classCallCheck3.default)(this, StatusNotification);
    return (0, _possibleConstructorReturn3.default)(this, (StatusNotification.__proto__ || (0, _getPrototypeOf2.default)(StatusNotification)).call(this, _StatusNotification2.default, _StatusNotificationResponse2.default, values));
  }

  return StatusNotification;
}(_BaseCommand3.default);
//# sourceMappingURL=StatusNotification.js.map