'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTransfer = exports.STATUS_UNKNOWNVENDORID = exports.STATUS_UNKNOWNMESSAGEID = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = undefined;

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

var _DataTransfer = require('../../ocpp-1.6-schemas/DataTransfer');

var _DataTransfer2 = _interopRequireDefault(_DataTransfer);

var _DataTransferResponse = require('../../ocpp-1.6-schemas/DataTransferResponse');

var _DataTransferResponse2 = _interopRequireDefault(_DataTransferResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_REJECTED = exports.STATUS_REJECTED = 'Rejected';
var STATUS_UNKNOWNMESSAGEID = exports.STATUS_UNKNOWNMESSAGEID = 'UnknownMessageId';
var STATUS_UNKNOWNVENDORID = exports.STATUS_UNKNOWNVENDORID = 'UnknownVendorId';

var DataTransfer = exports.DataTransfer = function (_BaseCommand) {
  (0, _inherits3.default)(DataTransfer, _BaseCommand);

  function DataTransfer(values) {
    (0, _classCallCheck3.default)(this, DataTransfer);
    return (0, _possibleConstructorReturn3.default)(this, (DataTransfer.__proto__ || (0, _getPrototypeOf2.default)(DataTransfer)).call(this, _DataTransfer2.default, _DataTransferResponse2.default, values));
  }

  return DataTransfer;
}(_BaseCommand3.default);
//# sourceMappingURL=DataTransfer.js.map