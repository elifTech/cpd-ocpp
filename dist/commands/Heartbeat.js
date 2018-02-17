'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heartbeat = undefined;

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

var _Heartbeat = require('../../ocpp-1.6-schemas/Heartbeat');

var _Heartbeat2 = _interopRequireDefault(_Heartbeat);

var _HeartbeatResponse = require('../../ocpp-1.6-schemas/HeartbeatResponse');

var _HeartbeatResponse2 = _interopRequireDefault(_HeartbeatResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heartbeat = exports.Heartbeat = function (_BaseCommand) {
  (0, _inherits3.default)(Heartbeat, _BaseCommand);

  function Heartbeat(values) {
    (0, _classCallCheck3.default)(this, Heartbeat);
    return (0, _possibleConstructorReturn3.default)(this, (Heartbeat.__proto__ || (0, _getPrototypeOf2.default)(Heartbeat)).call(this, _Heartbeat2.default, _HeartbeatResponse2.default, values));
  }

  return Heartbeat;
}(_BaseCommand3.default);
//# sourceMappingURL=Heartbeat.js.map