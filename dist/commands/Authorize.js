'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Authorize = exports.STATUS_CONCURRENTTX = exports.STATUS_INVALID = exports.STATUS_EXPIRED = exports.STATUS_BLOCKED = exports.STATUS_ACCEPTED = undefined;

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

var _Authorize = require('../../ocpp-1.6-schemas/Authorize');

var _Authorize2 = _interopRequireDefault(_Authorize);

var _AuthorizeResponse = require('../../ocpp-1.6-schemas/AuthorizeResponse');

var _AuthorizeResponse2 = _interopRequireDefault(_AuthorizeResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_BLOCKED = exports.STATUS_BLOCKED = 'Blocked';
var STATUS_EXPIRED = exports.STATUS_EXPIRED = 'Expired';
var STATUS_INVALID = exports.STATUS_INVALID = 'Invalid';
var STATUS_CONCURRENTTX = exports.STATUS_CONCURRENTTX = 'ConcurrentTx';

var Authorize = exports.Authorize = function (_BaseCommand) {
  (0, _inherits3.default)(Authorize, _BaseCommand);

  function Authorize(values) {
    (0, _classCallCheck3.default)(this, Authorize);
    return (0, _possibleConstructorReturn3.default)(this, (Authorize.__proto__ || (0, _getPrototypeOf2.default)(Authorize)).call(this, _Authorize2.default, _AuthorizeResponse2.default, values));
  }

  return Authorize;
}(_BaseCommand3.default);
//# sourceMappingURL=Authorize.js.map