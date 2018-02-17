'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDiagnostics = undefined;

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

var _GetDiagnostics = require('../../ocpp-1.6-schemas/GetDiagnostics');

var _GetDiagnostics2 = _interopRequireDefault(_GetDiagnostics);

var _GetDiagnosticsResponse = require('../../ocpp-1.6-schemas/GetDiagnosticsResponse');

var _GetDiagnosticsResponse2 = _interopRequireDefault(_GetDiagnosticsResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetDiagnostics = exports.GetDiagnostics = function (_BaseCommand) {
  (0, _inherits3.default)(GetDiagnostics, _BaseCommand);

  function GetDiagnostics(values) {
    (0, _classCallCheck3.default)(this, GetDiagnostics);
    return (0, _possibleConstructorReturn3.default)(this, (GetDiagnostics.__proto__ || (0, _getPrototypeOf2.default)(GetDiagnostics)).call(this, _GetDiagnostics2.default, _GetDiagnosticsResponse2.default, values));
  }

  return GetDiagnostics;
}(_BaseCommand3.default);
//# sourceMappingURL=GetDiagnostics.js.map