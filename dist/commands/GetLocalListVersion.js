'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetLocalListVersion = undefined;

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

var _GetLocalListVersion = require('../../ocpp-1.6-schemas/GetLocalListVersion');

var _GetLocalListVersion2 = _interopRequireDefault(_GetLocalListVersion);

var _GetLocalListVersionResponse = require('../../ocpp-1.6-schemas/GetLocalListVersionResponse');

var _GetLocalListVersionResponse2 = _interopRequireDefault(_GetLocalListVersionResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetLocalListVersion = exports.GetLocalListVersion = function (_BaseCommand) {
  (0, _inherits3.default)(GetLocalListVersion, _BaseCommand);

  function GetLocalListVersion(values) {
    (0, _classCallCheck3.default)(this, GetLocalListVersion);
    return (0, _possibleConstructorReturn3.default)(this, (GetLocalListVersion.__proto__ || (0, _getPrototypeOf2.default)(GetLocalListVersion)).call(this, _GetLocalListVersion2.default, _GetLocalListVersionResponse2.default, values));
  }

  return GetLocalListVersion;
}(_BaseCommand3.default);
//# sourceMappingURL=GetLocalListVersion.js.map