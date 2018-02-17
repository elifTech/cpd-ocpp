'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearCache = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = undefined;

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

var _ClearCache = require('../../ocpp-1.6-schemas/ClearCache');

var _ClearCache2 = _interopRequireDefault(_ClearCache);

var _ClearCacheResponse = require('../../ocpp-1.6-schemas/ClearCacheResponse');

var _ClearCacheResponse2 = _interopRequireDefault(_ClearCacheResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_REJECTED = exports.STATUS_REJECTED = 'Rejected';

var ClearCache = exports.ClearCache = function (_BaseCommand) {
  (0, _inherits3.default)(ClearCache, _BaseCommand);

  function ClearCache(values) {
    (0, _classCallCheck3.default)(this, ClearCache);
    return (0, _possibleConstructorReturn3.default)(this, (ClearCache.__proto__ || (0, _getPrototypeOf2.default)(ClearCache)).call(this, _ClearCache2.default, _ClearCacheResponse2.default, values));
  }

  return ClearCache;
}(_BaseCommand3.default);
//# sourceMappingURL=ClearCache.js.map