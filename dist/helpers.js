'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperties = require('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

exports.applyPropertiesValidators = applyPropertiesValidators;
exports.getObjectValues = getObjectValues;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _enjoi = require('enjoi');

var _enjoi2 = _interopRequireDefault(_enjoi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MODEL_VALUES_SYMBOL = (0, _symbol2.default)('modelValues');

function applyPropertiesValidators(object, schema, values) {
  var validate = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(fieldName, value, schema) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _joi2.default.validate(value, schema);

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context['catch'](0);
              throw new Error('Invalid value ' + value + ' for field ' + fieldName);

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 5]]);
    }));

    return function validate(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var joiSchema = new _enjoi2.default(schema);

  object[MODEL_VALUES_SYMBOL] = {};

  var properties = {};

  var _loop = function _loop(key) {
    if (!schema.properties.hasOwnProperty(key)) {
      return {
        v: void 0
      };
    }
    var validator = _joi2.default.reach(joiSchema, key);
    validate(key, values[key], validator);
    object[MODEL_VALUES_SYMBOL][key] = values[key];

    properties[key] = {
      get: function get() {
        return object[MODEL_VALUES_SYMBOL][key];
      },
      set: function set(val) {
        validate(key, val, validator);

        val === undefined ? delete object[MODEL_VALUES_SYMBOL][key] : object[MODEL_VALUES_SYMBOL][key] = val;
      },
      enumerable: true,
      configurable: false
    };
  };

  for (var key in schema.properties) {
    var _ret = _loop(key);

    if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
  }

  (0, _defineProperties2.default)(object, properties);
}

function getObjectValues(object) {
  var values = (0, _extends3.default)({}, object[MODEL_VALUES_SYMBOL] || {});

  for (var key in values) {
    if (!values.hasOwnProperty(key)) {
      return;
    }
    if (values[key] === undefined) {
      delete values[key];
    }
  }
  return object[MODEL_VALUES_SYMBOL];
}
//# sourceMappingURL=helpers.js.map