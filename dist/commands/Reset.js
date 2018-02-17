'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reset = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = exports.TYPE_SOFT = exports.TYPE_HARD = undefined;

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

var _Reset = require('../../ocpp-1.6-schemas/Reset');

var _Reset2 = _interopRequireDefault(_Reset);

var _ResetResponse = require('../../ocpp-1.6-schemas/ResetResponse');

var _ResetResponse2 = _interopRequireDefault(_ResetResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE_HARD = exports.TYPE_HARD = 'Hard';
var TYPE_SOFT = exports.TYPE_SOFT = 'Soft';

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_REJECTED = exports.STATUS_REJECTED = 'Rejected';

var Reset = exports.Reset = function (_BaseCommand) {
  (0, _inherits3.default)(Reset, _BaseCommand);

  function Reset(values) {
    (0, _classCallCheck3.default)(this, Reset);
    return (0, _possibleConstructorReturn3.default)(this, (Reset.__proto__ || (0, _getPrototypeOf2.default)(Reset)).call(this, _Reset2.default, _ResetResponse2.default, values));
  }

  return Reset;
}(_BaseCommand3.default);
//# sourceMappingURL=Reset.js.map