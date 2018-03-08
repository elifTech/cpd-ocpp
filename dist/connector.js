'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _StatusNotification = require('./commands/StatusNotification');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Connector = function Connector(connectorId) {
  (0, _classCallCheck3.default)(this, Connector);

  this.connectorId = connectorId;
  this.status = _StatusNotification.STATUS_AVAILABLE;
  this.errorCode = _StatusNotification.ERRORCODE_NOERROR;
};

exports.default = Connector;
//# sourceMappingURL=connector.js.map