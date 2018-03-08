'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERROR_GENERICERROR = exports.ERROR_TYPECONSTRAINTVIOLATION = exports.ERROR_OCCURENCECONSTRAINTVIOLATION = exports.ERROR_PROPERTYCONSTRAINTVIOLATION = exports.ERROR_FORMATIONVIOLATION = exports.ERROR_SECURITYERROR = exports.ERROR_PROTOCOLERROR = exports.ERROR_INTERNALERROR = exports.ERROR_NOTSUPPORTED = exports.ERROR_NOTIMPLEMENTED = undefined;

var _setPrototypeOf = require('babel-runtime/core-js/object/set-prototype-of');

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Requested Action is not known by receiver
var ERROR_NOTIMPLEMENTED = exports.ERROR_NOTIMPLEMENTED = 'NotImplemented';

// Requested Action is recognized but not supported by the receiver
var ERROR_NOTSUPPORTED = exports.ERROR_NOTSUPPORTED = 'NotSupported';

// An internal error occurred and the receiver was not able to process the requested Action successfully
var ERROR_INTERNALERROR = exports.ERROR_INTERNALERROR = 'InternalError';

// Payload for Action is incomplete
var ERROR_PROTOCOLERROR = exports.ERROR_PROTOCOLERROR = 'ProtocolError';

// During the processing of Action a security issue occurred preventing receiver from completing the Action successfully
var ERROR_SECURITYERROR = exports.ERROR_SECURITYERROR = 'SecurityError';

// Payload for Action is syntactically incorrect or not conform the PDU structure for Action
var ERROR_FORMATIONVIOLATION = exports.ERROR_FORMATIONVIOLATION = 'FormationViolation';

// Payload is syntactically correct but at least one field contains an invalid value
var ERROR_PROPERTYCONSTRAINTVIOLATION = exports.ERROR_PROPERTYCONSTRAINTVIOLATION = 'PropertyConstraintViolation';

// Payload for Action is syntactically correct but at least one of the fields violates occurence constraints
var ERROR_OCCURENCECONSTRAINTVIOLATION = exports.ERROR_OCCURENCECONSTRAINTVIOLATION = 'OccurenceConstraintViolation';

// Payload for Action is syntactically correct but at least one of the fields violates data type constraints (e.g. “somestring”: 12)
var ERROR_TYPECONSTRAINTVIOLATION = exports.ERROR_TYPECONSTRAINTVIOLATION = 'TypeConstraintViolation';

// Any other error not covered by the previous ones
var ERROR_GENERICERROR = exports.ERROR_GENERICERROR = 'GenericError';

var OCPPError = function (_Error) {
  (0, _inherits3.default)(OCPPError, _Error);

  function OCPPError(code, message, details) {
    (0, _classCallCheck3.default)(this, OCPPError);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OCPPError.__proto__ || (0, _getPrototypeOf2.default)(OCPPError)).call(this, message));

    _this.code = code;
    _this.message = message;
    _this.details = details;

    (0, _setPrototypeOf2.default)(_this, OCPPError.prototype); // for instanceof

    Error.captureStackTrace ? Error.captureStackTrace(_this, _this.constructor) : _this.stack = new Error().stack;
    return _this;
  }

  return OCPPError;
}(Error);

exports.default = OCPPError;
//# sourceMappingURL=ocppError.js.map