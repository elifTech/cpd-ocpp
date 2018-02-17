'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirmwareStatusNotification = exports.STATUS_INSTALLED = exports.STATUS_INSTALLING = exports.STATUS_INSTALLATIONFAILED = exports.STATUS_IDLE = exports.STATUS_DOWNLOADING = exports.STATUS_DOWNLOADFAILED = exports.STATUS_DOWNLOADED = undefined;

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

var _FirmwareStatusNotification = require('../../ocpp-1.6-schemas/FirmwareStatusNotification');

var _FirmwareStatusNotification2 = _interopRequireDefault(_FirmwareStatusNotification);

var _FirmwareStatusNotificationResponse = require('../../ocpp-1.6-schemas/FirmwareStatusNotificationResponse');

var _FirmwareStatusNotificationResponse2 = _interopRequireDefault(_FirmwareStatusNotificationResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_DOWNLOADED = exports.STATUS_DOWNLOADED = 'Downloaded';
var STATUS_DOWNLOADFAILED = exports.STATUS_DOWNLOADFAILED = 'DownloadFailed';
var STATUS_DOWNLOADING = exports.STATUS_DOWNLOADING = 'Downloading';
var STATUS_IDLE = exports.STATUS_IDLE = 'Idle';
var STATUS_INSTALLATIONFAILED = exports.STATUS_INSTALLATIONFAILED = 'InstallationFailed';
var STATUS_INSTALLING = exports.STATUS_INSTALLING = 'Installing';
var STATUS_INSTALLED = exports.STATUS_INSTALLED = 'Installed';

var FirmwareStatusNotification = exports.FirmwareStatusNotification = function (_BaseCommand) {
  (0, _inherits3.default)(FirmwareStatusNotification, _BaseCommand);

  function FirmwareStatusNotification(values) {
    (0, _classCallCheck3.default)(this, FirmwareStatusNotification);
    return (0, _possibleConstructorReturn3.default)(this, (FirmwareStatusNotification.__proto__ || (0, _getPrototypeOf2.default)(FirmwareStatusNotification)).call(this, _FirmwareStatusNotification2.default, _FirmwareStatusNotificationResponse2.default, values));
  }

  return FirmwareStatusNotification;
}(_BaseCommand3.default);
//# sourceMappingURL=FirmwareStatusNotification.js.map