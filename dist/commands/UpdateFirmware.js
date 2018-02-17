'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateFirmware = undefined;

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

var _UpdateFirmware = require('../../ocpp-1.6-schemas/UpdateFirmware');

var _UpdateFirmware2 = _interopRequireDefault(_UpdateFirmware);

var _UpdateFirmwareResponse = require('../../ocpp-1.6-schemas/UpdateFirmwareResponse');

var _UpdateFirmwareResponse2 = _interopRequireDefault(_UpdateFirmwareResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UpdateFirmware = exports.UpdateFirmware = function (_BaseCommand) {
  (0, _inherits3.default)(UpdateFirmware, _BaseCommand);

  function UpdateFirmware(values) {
    (0, _classCallCheck3.default)(this, UpdateFirmware);
    return (0, _possibleConstructorReturn3.default)(this, (UpdateFirmware.__proto__ || (0, _getPrototypeOf2.default)(UpdateFirmware)).call(this, _UpdateFirmware2.default, _UpdateFirmwareResponse2.default, values));
  }

  return UpdateFirmware;
}(_BaseCommand3.default);
//# sourceMappingURL=UpdateFirmware.js.map