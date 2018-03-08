'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _connection = require('./connection');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)(_constants.DEBUG_LIBNAME);

var CentralSystemClient = function CentralSystemClient(connection) {
  (0, _classCallCheck3.default)(this, CentralSystemClient);

  this.connection = connection;
};

exports.default = CentralSystemClient;
//# sourceMappingURL=centralSystemClient.js.map