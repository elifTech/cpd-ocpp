'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StopTransaction = exports.STATUS_CONCURRENTTX = exports.STATUS_INVALID = exports.STATUS_EXPIRED = exports.STATUS_BLOCKED = exports.STATUS_ACCEPTED = exports.UNIT_PERCENT = exports.UNIT_FAHRENHEIT = exports.UNIT_CELCIUS = exports.UNIT_K = exports.UNIT_V = exports.UNIT_A = exports.UNIT_KVAR = exports.UNIT_VAR = exports.UNIT_KVA = exports.UNIT_VA = exports.UNIT_KW = exports.UNIT_W = exports.UNIT_KVARH = exports.UNIT_VARH = exports.UNIT_KWH = exports.UNIT_WH = exports.LOCATION_BODY = exports.LOCATION_OUTLET = exports.LOCATION_INLET = exports.LOCATION_EV = exports.LOCATION_CABLE = exports.PHASE_L3_L1 = exports.PHASE_L2_L3 = exports.PHASE_L1_L2 = exports.PHASE_L3_N = exports.PHASE_L2_N = exports.PHASE_L1_N = exports.PHASE_N = exports.PHASE_L3 = exports.PHASE_L2 = exports.PHASE_L1 = exports.MEASURAND_RPM = exports.MEASURAND_SOC = exports.MEASURAND_TEMPERATURE = exports.MEASURAND_FREQUENCY = exports.MEASURAND_VOLTAGE = exports.MEASURAND_CURRENT_OFFERED = exports.MEASURAND_CURRENT_EXPORT = exports.MEASURAND_CURRENT_IMPORT = exports.MEASURAND_POWER_FACTOR = exports.MEASURAND_POWER_REACTIVE_IMPORT = exports.MEASURAND_POWER_REACTIVE_EXPORT = exports.MEASURAND_POWER_OFFERED = exports.MEASURAND_POWER_ACTIVE_IMPORT = exports.MEASURAND_POWER_ACTIVE_EXPORT = exports.MEASURAND_ENERGY_REACTIVE_IMPORT_INTERVAL = exports.MEASURAND_ENERGY_REACTIVE_EXPORT_INTERVAL = exports.MEASURAND_ENERGY_ACTIVE_IMPORT_INTERVAL = exports.MEASURAND_ENERGY_ACTIVE_EXPORT_INTERVAL = exports.MEASURAND_ENERGY_REACTIVE_IMPORT_REGISTER = exports.MEASURAND_ENERGY_REACTIVE_EXPORT_REGISTER = exports.MEASURAND_ENERGY_ACTIVE_IMPORT_REGISTER = exports.MEASURAND_ENERGY_ACTIVE_EXPORT_REGISTER = exports.FORMAT_SIGNEDDATA = exports.FORMAT_RAW = exports.CONTEXT_OTHER = exports.CONTEXT_TRIGGER = exports.CONTEXT_TRANSACTION_END = exports.CONTEXT_TRANSACTION_BEGIN = exports.CONTEXT_SAMPLE_PERIODIC = exports.CONTEXT_SAMPLE_CLOCK = exports.CONTEXT_INTERRUPTION_END = exports.CONTEXT_INTERRUPTION_BEGIN = exports.CONTEXT_DEAUTHORIZED = exports.REASON_DEAUTHORIZED = exports.REASON_UNLOCKCOMMAND = exports.REASON_SOFTRESET = exports.REASON_REMOTE = exports.REASON_REBOOT = exports.REASON_POWERLOSS = exports.REASON_OTHER = exports.REASON_LOCAL = exports.REASON_HARDRESET = exports.REASON_EVDISCONNECTED = exports.REASON_EMERGENCYSTOP = exports.REASON_ACCEPTED = undefined;

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

var _StopTransaction = require('../../ocpp-1.6-schemas/StopTransaction');

var _StopTransaction2 = _interopRequireDefault(_StopTransaction);

var _StopTransactionResponse = require('../../ocpp-1.6-schemas/StopTransactionResponse');

var _StopTransactionResponse2 = _interopRequireDefault(_StopTransactionResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REASON_ACCEPTED = exports.REASON_ACCEPTED = 'Accepted';
var REASON_EMERGENCYSTOP = exports.REASON_EMERGENCYSTOP = 'EmergencyStop';
var REASON_EVDISCONNECTED = exports.REASON_EVDISCONNECTED = 'EVDisconnected';
var REASON_HARDRESET = exports.REASON_HARDRESET = 'HardReset';
var REASON_LOCAL = exports.REASON_LOCAL = 'Local';
var REASON_OTHER = exports.REASON_OTHER = 'Other';
var REASON_POWERLOSS = exports.REASON_POWERLOSS = 'PowerLoss';
var REASON_REBOOT = exports.REASON_REBOOT = 'Reboot';
var REASON_REMOTE = exports.REASON_REMOTE = 'Remote';
var REASON_SOFTRESET = exports.REASON_SOFTRESET = 'SoftReset';
var REASON_UNLOCKCOMMAND = exports.REASON_UNLOCKCOMMAND = 'UnlockCommand';
var REASON_DEAUTHORIZED = exports.REASON_DEAUTHORIZED = 'DeAuthorized';

var CONTEXT_DEAUTHORIZED = exports.CONTEXT_DEAUTHORIZED = 'DeAuthorized';
var CONTEXT_INTERRUPTION_BEGIN = exports.CONTEXT_INTERRUPTION_BEGIN = 'Interruption.Begin';
var CONTEXT_INTERRUPTION_END = exports.CONTEXT_INTERRUPTION_END = 'Interruption.End';
var CONTEXT_SAMPLE_CLOCK = exports.CONTEXT_SAMPLE_CLOCK = 'Sample.Clock';
var CONTEXT_SAMPLE_PERIODIC = exports.CONTEXT_SAMPLE_PERIODIC = 'Sample.Periodic';
var CONTEXT_TRANSACTION_BEGIN = exports.CONTEXT_TRANSACTION_BEGIN = 'Transaction.Begin';
var CONTEXT_TRANSACTION_END = exports.CONTEXT_TRANSACTION_END = 'Transaction.End';
var CONTEXT_TRIGGER = exports.CONTEXT_TRIGGER = 'Trigger';
var CONTEXT_OTHER = exports.CONTEXT_OTHER = 'Other';

var FORMAT_RAW = exports.FORMAT_RAW = 'Raw';
var FORMAT_SIGNEDDATA = exports.FORMAT_SIGNEDDATA = 'SignedData';

var MEASURAND_ENERGY_ACTIVE_EXPORT_REGISTER = exports.MEASURAND_ENERGY_ACTIVE_EXPORT_REGISTER = 'Energy.Active.Export.Register';
var MEASURAND_ENERGY_ACTIVE_IMPORT_REGISTER = exports.MEASURAND_ENERGY_ACTIVE_IMPORT_REGISTER = 'Energy.Active.Import.Register';
var MEASURAND_ENERGY_REACTIVE_EXPORT_REGISTER = exports.MEASURAND_ENERGY_REACTIVE_EXPORT_REGISTER = 'Energy.Reactive.Export.Register';
var MEASURAND_ENERGY_REACTIVE_IMPORT_REGISTER = exports.MEASURAND_ENERGY_REACTIVE_IMPORT_REGISTER = 'Energy.Reactive.Import.Register';
var MEASURAND_ENERGY_ACTIVE_EXPORT_INTERVAL = exports.MEASURAND_ENERGY_ACTIVE_EXPORT_INTERVAL = 'Energy.Active.Export.Interval';
var MEASURAND_ENERGY_ACTIVE_IMPORT_INTERVAL = exports.MEASURAND_ENERGY_ACTIVE_IMPORT_INTERVAL = 'Energy.Active.Import.Interval';
var MEASURAND_ENERGY_REACTIVE_EXPORT_INTERVAL = exports.MEASURAND_ENERGY_REACTIVE_EXPORT_INTERVAL = 'Energy.Reactive.Export.Interval';
var MEASURAND_ENERGY_REACTIVE_IMPORT_INTERVAL = exports.MEASURAND_ENERGY_REACTIVE_IMPORT_INTERVAL = 'Energy.Reactive.Import.Interval';
var MEASURAND_POWER_ACTIVE_EXPORT = exports.MEASURAND_POWER_ACTIVE_EXPORT = 'Power.Active.Export';
var MEASURAND_POWER_ACTIVE_IMPORT = exports.MEASURAND_POWER_ACTIVE_IMPORT = 'Power.Active.Import';
var MEASURAND_POWER_OFFERED = exports.MEASURAND_POWER_OFFERED = 'Power.Offered';
var MEASURAND_POWER_REACTIVE_EXPORT = exports.MEASURAND_POWER_REACTIVE_EXPORT = 'Power.Reactive.Export';
var MEASURAND_POWER_REACTIVE_IMPORT = exports.MEASURAND_POWER_REACTIVE_IMPORT = 'Power.Reactive.Import';
var MEASURAND_POWER_FACTOR = exports.MEASURAND_POWER_FACTOR = 'Power.Factor';
var MEASURAND_CURRENT_IMPORT = exports.MEASURAND_CURRENT_IMPORT = 'Current.Import';
var MEASURAND_CURRENT_EXPORT = exports.MEASURAND_CURRENT_EXPORT = 'Current.Export';
var MEASURAND_CURRENT_OFFERED = exports.MEASURAND_CURRENT_OFFERED = 'Current.Offered';
var MEASURAND_VOLTAGE = exports.MEASURAND_VOLTAGE = 'Voltage';
var MEASURAND_FREQUENCY = exports.MEASURAND_FREQUENCY = 'Frequency';
var MEASURAND_TEMPERATURE = exports.MEASURAND_TEMPERATURE = 'Temperature';
var MEASURAND_SOC = exports.MEASURAND_SOC = 'SoC';
var MEASURAND_RPM = exports.MEASURAND_RPM = 'RPM';

var PHASE_L1 = exports.PHASE_L1 = 'L1';
var PHASE_L2 = exports.PHASE_L2 = 'L2';
var PHASE_L3 = exports.PHASE_L3 = 'L3';
var PHASE_N = exports.PHASE_N = 'N';
var PHASE_L1_N = exports.PHASE_L1_N = 'L1-N';
var PHASE_L2_N = exports.PHASE_L2_N = 'L2-N';
var PHASE_L3_N = exports.PHASE_L3_N = 'L3-N';
var PHASE_L1_L2 = exports.PHASE_L1_L2 = 'L1-L2';
var PHASE_L2_L3 = exports.PHASE_L2_L3 = 'L2-L3';
var PHASE_L3_L1 = exports.PHASE_L3_L1 = 'L3-L1';

var LOCATION_CABLE = exports.LOCATION_CABLE = 'Cable';
var LOCATION_EV = exports.LOCATION_EV = 'EV';
var LOCATION_INLET = exports.LOCATION_INLET = 'Inlet';
var LOCATION_OUTLET = exports.LOCATION_OUTLET = 'Outlet';
var LOCATION_BODY = exports.LOCATION_BODY = 'Body';

var UNIT_WH = exports.UNIT_WH = 'Wh';
var UNIT_KWH = exports.UNIT_KWH = 'kWh';
var UNIT_VARH = exports.UNIT_VARH = 'varh';
var UNIT_KVARH = exports.UNIT_KVARH = 'kvarh';
var UNIT_W = exports.UNIT_W = 'W';
var UNIT_KW = exports.UNIT_KW = 'kW';
var UNIT_VA = exports.UNIT_VA = 'VA';
var UNIT_KVA = exports.UNIT_KVA = 'kVA';
var UNIT_VAR = exports.UNIT_VAR = 'var';
var UNIT_KVAR = exports.UNIT_KVAR = 'kvar';
var UNIT_A = exports.UNIT_A = 'A';
var UNIT_V = exports.UNIT_V = 'V';
var UNIT_K = exports.UNIT_K = 'K';
var UNIT_CELCIUS = exports.UNIT_CELCIUS = 'Celcius';
var UNIT_FAHRENHEIT = exports.UNIT_FAHRENHEIT = 'Fahrenheit';
var UNIT_PERCENT = exports.UNIT_PERCENT = 'Percent';

var STATUS_ACCEPTED = exports.STATUS_ACCEPTED = 'Accepted';
var STATUS_BLOCKED = exports.STATUS_BLOCKED = 'Blocked';
var STATUS_EXPIRED = exports.STATUS_EXPIRED = 'Expired';
var STATUS_INVALID = exports.STATUS_INVALID = 'Invalid';
var STATUS_CONCURRENTTX = exports.STATUS_CONCURRENTTX = 'ConcurrentTx';

var StopTransaction = exports.StopTransaction = function (_BaseCommand) {
  (0, _inherits3.default)(StopTransaction, _BaseCommand);

  function StopTransaction(values) {
    (0, _classCallCheck3.default)(this, StopTransaction);
    return (0, _possibleConstructorReturn3.default)(this, (StopTransaction.__proto__ || (0, _getPrototypeOf2.default)(StopTransaction)).call(this, _StopTransaction2.default, _StopTransactionResponse2.default, values));
  }

  return StopTransaction;
}(_BaseCommand3.default);
//# sourceMappingURL=StopTransaction.js.map