'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StartTransaction = exports.STATUS_CONCURRENTTX = exports.STATUS_INVALID = exports.STATUS_EXPIRED = exports.STATUS_BLOCKED = exports.STATUS_ACCEPTED = undefined;

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

var _StartTransaction = require('../../ocpp-1.6-schemas/StartTransaction');

var _StartTransaction2 = _interopRequireDefault(_StartTransaction);

var _StartTransactionResponse = require('../../ocpp-1.6-schemas/StartTransactionResponse');

var _StartTransactionResponse2 = _interopRequireDefault(_StartTransactionResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_BLOCKED = exports.STATUS_BLOCKED = 'Blocked';
var STATUS_EXPIRED = exports.STATUS_EXPIRED = 'Expired';
var STATUS_INVALID = exports.STATUS_INVALID = 'Invalid';
var STATUS_CONCURRENTTX = exports.STATUS_CONCURRENTTX = 'ConcurrentTx';

var StartTransaction = exports.StartTransaction = function (_BaseCommand) {
  (0, _inherits3.default)(StartTransaction, _BaseCommand);

  function StartTransaction(values) {
    (0, _classCallCheck3.default)(this, StartTransaction);
    return (0, _possibleConstructorReturn3.default)(this, (StartTransaction.__proto__ || (0, _getPrototypeOf2.default)(StartTransaction)).call(this, _StartTransaction2.default, _StartTransactionResponse2.default, values));
  }

  return StartTransaction;
}(_BaseCommand3.default);
//# sourceMappingURL=StartTransaction.js.map