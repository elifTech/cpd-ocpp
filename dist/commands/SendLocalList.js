'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendLocalList = exports.STATUS_VERSIONMISMATCH = exports.STATUS_NOTSUPPORTED = exports.STATUS_FAILED = exports.STATUS_ACCEPTED = exports.UPDATE_TYPE_FULL = exports.UPDATE_TYPE_DIFFERENTIAL = exports.IDTAGINFO_STATUS_CONCURRENTTX = exports.IDTAGINFO_STATUS_INVALID = exports.IDTAGINFO_STATUS_EXPIRED = exports.IDTAGINFO_STATUS_BLOCKED = exports.IDTAGINFO_STATUS_ACCEPTED = undefined;

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

var _SendLocalList = require('../../ocpp-1.6-schemas/SendLocalList');

var _SendLocalList2 = _interopRequireDefault(_SendLocalList);

var _SendLocalListResponse = require('../../ocpp-1.6-schemas/SendLocalListResponse');

var _SendLocalListResponse2 = _interopRequireDefault(_SendLocalListResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IDTAGINFO_STATUS_ACCEPTED = exports.IDTAGINFO_STATUS_ACCEPTED = 'Accepted';
var IDTAGINFO_STATUS_BLOCKED = exports.IDTAGINFO_STATUS_BLOCKED = 'Blocked';
var IDTAGINFO_STATUS_EXPIRED = exports.IDTAGINFO_STATUS_EXPIRED = 'Expired';
var IDTAGINFO_STATUS_INVALID = exports.IDTAGINFO_STATUS_INVALID = 'Invalid';
var IDTAGINFO_STATUS_CONCURRENTTX = exports.IDTAGINFO_STATUS_CONCURRENTTX = 'ConcurrentTx';

var UPDATE_TYPE_DIFFERENTIAL = exports.UPDATE_TYPE_DIFFERENTIAL = 'Differential';
var UPDATE_TYPE_FULL = exports.UPDATE_TYPE_FULL = 'Full';

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_FAILED = exports.STATUS_FAILED = 'Failed';
var STATUS_NOTSUPPORTED = exports.STATUS_NOTSUPPORTED = 'NotSupported';
var STATUS_VERSIONMISMATCH = exports.STATUS_VERSIONMISMATCH = 'VersionMismatch';

var SendLocalList = exports.SendLocalList = function (_BaseCommand) {
  (0, _inherits3.default)(SendLocalList, _BaseCommand);

  function SendLocalList(values) {
    (0, _classCallCheck3.default)(this, SendLocalList);
    return (0, _possibleConstructorReturn3.default)(this, (SendLocalList.__proto__ || (0, _getPrototypeOf2.default)(SendLocalList)).call(this, _SendLocalList2.default, _SendLocalListResponse2.default, values));
  }

  return SendLocalList;
}(_BaseCommand3.default);
//# sourceMappingURL=SendLocalList.js.map