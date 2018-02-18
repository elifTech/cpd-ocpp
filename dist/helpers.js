'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

function applyPropertiesValidators(object, schema) {
  var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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

  function validate(fieldName, value, schema) {
    var _Joi$validate = _joi2.default.validate(value, schema),
        error = _Joi$validate.error;

    if (error !== null) {
      throw new Error('Invalid value "' + value + '" for field ' + fieldName);
    }
  }
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