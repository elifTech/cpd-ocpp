'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiagnosticsStatusNotification = exports.STATUS_UPLOADING = exports.STATUS_UPLOADFAILED = exports.STATUS_UPLOADED = exports.STATUS_IDLE = undefined;

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

var _DiagnosticsStatusNotification = require('../../ocpp-1.6-schemas/DiagnosticsStatusNotification');

var _DiagnosticsStatusNotification2 = _interopRequireDefault(_DiagnosticsStatusNotification);

var _DiagnosticsStatusNotificationResponse = require('../../ocpp-1.6-schemas/DiagnosticsStatusNotificationResponse');

var _DiagnosticsStatusNotificationResponse2 = _interopRequireDefault(_DiagnosticsStatusNotificationResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_IDLE = exports.STATUS_IDLE = 'Idle';
var STATUS_UPLOADED = exports.STATUS_UPLOADED = 'Uploaded';
var STATUS_UPLOADFAILED = exports.STATUS_UPLOADFAILED = 'UploadFailed';
var STATUS_UPLOADING = exports.STATUS_UPLOADING = 'Uploading';

var DiagnosticsStatusNotification = exports.DiagnosticsStatusNotification = function (_BaseCommand) {
  (0, _inherits3.default)(DiagnosticsStatusNotification, _BaseCommand);

  function DiagnosticsStatusNotification(values) {
    (0, _classCallCheck3.default)(this, DiagnosticsStatusNotification);
    return (0, _possibleConstructorReturn3.default)(this, (DiagnosticsStatusNotification.__proto__ || (0, _getPrototypeOf2.default)(DiagnosticsStatusNotification)).call(this, _DiagnosticsStatusNotification2.default, _DiagnosticsStatusNotificationResponse2.default, values));
  }

  return DiagnosticsStatusNotification;
}(_BaseCommand3.default);
//# sourceMappingURL=DiagnosticsStatusNotification.js.map