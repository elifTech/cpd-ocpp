import Joi from 'joi';
import Enjoi from 'enjoi';

const MODEL_VALUES_SYMBOL = Symbol('modelValues');

export
function applyPropertiesValidators (object, schema, values = {}) {
  const joiSchema = new Enjoi(schema);

  object[MODEL_VALUES_SYMBOL] = {};

  const properties = {};
  for (let key in schema.properties) {
    if (!schema.properties.hasOwnProperty(key)) {
      return;
    }
    const validator = Joi.reach(joiSchema, key);

    validate(key, values[key], validator);
    object[MODEL_VALUES_SYMBOL][key] = values[key];

    properties[key] = {
      get: () => object[MODEL_VALUES_SYMBOL][key],
      set: (val) => {
        validate(key, val, validator);

        (val === undefined) ? (delete object[MODEL_VALUES_SYMBOL][key]) : (object[MODEL_VALUES_SYMBOL][key] = val);
      },
      enumerable: true,
      configurable: false
    };
  }

  Object.defineProperties(object, properties);

  function validate (fieldName, value, schema) {
    const { error } = Joi.validate(value, schema);
    if (error !== null) {
      throw new Error(`Invalid value "${value}" for field ${fieldName}`);
    }
  }
}

export
function getObjectValues (object) {
  const values = { ...(object[MODEL_VALUES_SYMBOL] || {}) };

  for (let key in values) {
    if (!values.hasOwnProperty(key)) {
      return;
    }
    if (values[key] === undefined) {
      delete values[key];
    }
  }
  return object[MODEL_VALUES_SYMBOL];
}
