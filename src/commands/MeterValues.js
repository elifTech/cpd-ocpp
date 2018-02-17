import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/MeterValues';
import responseSchema from '../../ocpp-1.6-schemas/MeterValuesResponse';

export const CONTEXT_DEAUTHORIZED = 'DeAuthorized';
export const CONTEXT_INTERRUPTION_BEGIN = 'Interruption.Begin';
export const CONTEXT_INTERRUPTION_END = 'Interruption.End';
export const CONTEXT_SAMPLE_CLOCK = 'Sample.Clock';
export const CONTEXT_SAMPLE_PERIODIC = 'Sample.Periodic';
export const CONTEXT_TRANSACTION_BEGIN = 'Transaction.Begin';
export const CONTEXT_TRANSACTION_END = 'Transaction.End';
export const CONTEXT_TRIGGER = 'Trigger';
export const CONTEXT_OTHER = 'Other';

export const FORMAT_RAW = 'Raw';
export const FORMAT_SIGNEDDATA = 'SignedData';

export const MEASURAND_ENERGY_ACTIVE_EXPORT_REGISTER = 'Energy.Active.Export.Register';
export const MEASURAND_ENERGY_ACTIVE_IMPORT_REGISTER = 'Energy.Active.Import.Register';
export const MEASURAND_ENERGY_REACTIVE_EXPORT_REGISTER = 'Energy.Reactive.Export.Register';
export const MEASURAND_ENERGY_REACTIVE_IMPORT_REGISTER = 'Energy.Reactive.Import.Register';
export const MEASURAND_ENERGY_ACTIVE_EXPORT_INTERVAL = 'Energy.Active.Export.Interval';
export const MEASURAND_ENERGY_ACTIVE_IMPORT_INTERVAL = 'Energy.Active.Import.Interval';
export const MEASURAND_ENERGY_REACTIVE_EXPORT_INTERVAL = 'Energy.Reactive.Export.Interval';
export const MEASURAND_ENERGY_REACTIVE_IMPORT_INTERVAL = 'Energy.Reactive.Import.Interval';
export const MEASURAND_POWER_ACTIVE_EXPORT = 'Power.Active.Export';
export const MEASURAND_POWER_ACTIVE_IMPORT = 'Power.Active.Import';
export const MEASURAND_POWER_OFFERED = 'Power.Offered';
export const MEASURAND_POWER_REACTIVE_EXPORT = 'Power.Reactive.Export';
export const MEASURAND_POWER_REACTIVE_IMPORT = 'Power.Reactive.Import';
export const MEASURAND_POWER_FACTOR = 'Power.Factor';
export const MEASURAND_CURRENT_IMPORT = 'Current.Import';
export const MEASURAND_CURRENT_EXPORT = 'Current.Export';
export const MEASURAND_CURRENT_OFFERED = 'Current.Offered';
export const MEASURAND_VOLTAGE = 'Voltage';
export const MEASURAND_FREQUENCY = 'Frequency';
export const MEASURAND_TEMPERATURE = 'Temperature';
export const MEASURAND_SOC = 'SoC';
export const MEASURAND_RPM = 'RPM';

export const PHASE_L1 = 'L1';
export const PHASE_L2 = 'L2';
export const PHASE_L3 = 'L3';
export const PHASE_N = 'N';
export const PHASE_L1_N = 'L1-N';
export const PHASE_L2_N = 'L2-N';
export const PHASE_L3_N = 'L3-N';
export const PHASE_L1_L2 = 'L1-L2';
export const PHASE_L2_L3 = 'L2-L3';
export const PHASE_L3_L1 = 'L3-L1';

export const LOCATION_CABLE = 'Cable';
export const LOCATION_EV = 'EV';
export const LOCATION_INLET = 'Inlet';
export const LOCATION_OUTLET = 'Outlet';
export const LOCATION_BODY = 'Body';

export const UNIT_WH = 'Wh';
export const UNIT_KWH = 'kWh';
export const UNIT_VARH = 'varh';
export const UNIT_KVARH = 'kvarh';
export const UNIT_W = 'W';
export const UNIT_KW = 'kW';
export const UNIT_VA = 'VA';
export const UNIT_KVA = 'kVA';
export const UNIT_VAR = 'var';
export const UNIT_KVAR = 'kvar';
export const UNIT_A = 'A';
export const UNIT_V = 'V';
export const UNIT_K = 'K';
export const UNIT_CELCIUS = 'Celcius';
export const UNIT_FAHRENHEIT = 'Fahrenheit';
export const UNIT_PERCENT = 'Percent';

export
class MeterValues extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
