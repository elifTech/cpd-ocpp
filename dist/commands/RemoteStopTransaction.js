'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoteStopTransaction = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = undefined;

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

var _RemoteStopTransaction = require('../../ocpp-1.6-schemas/RemoteStopTransaction');

var _RemoteStopTransaction2 = _interopRequireDefault(_RemoteStopTransaction);

var _RemoteStopTransactionResponse = require('../../ocpp-1.6-schemas/RemoteStopTransactionResponse');

var _RemoteStopTransactionResponse2 = _interopRequireDefault(_RemoteStopTransactionResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_REJECTED = exports.STATUS_REJECTED = 'Rejected';

var RemoteStopTransaction = exports.RemoteStopTransaction = function (_BaseCommand) {
  (0, _inherits3.default)(RemoteStopTransaction, _BaseCommand);

  function RemoteStopTransaction(values) {
    (0, _classCallCheck3.default)(this, RemoteStopTransaction);
    return (0, _possibleConstructorReturn3.default)(this, (RemoteStopTransaction.__proto__ || (0, _getPrototypeOf2.default)(RemoteStopTransaction)).call(this, _RemoteStopTransaction2.default, _RemoteStopTransactionResponse2.default, values));
  }

  return RemoteStopTransaction;
}(_BaseCommand3.default);
//# sourceMappingURL=RemoteStopTransaction.js.map