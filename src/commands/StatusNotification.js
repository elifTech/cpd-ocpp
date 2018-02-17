import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/StatusNotification';
import responseSchema from '../../ocpp-1.6-schemas/StatusNotificationResponse';

export const ERRORCODE_CONNECTORLOCKFAILURE = 'ConnectorLockFailure';
export const ERRORCODE_EVCOMMUNICATIONERROR = 'EVCommunicationError';
export const ERRORCODE_GROUNDFAILURE = 'GroundFailure';
export const ERRORCODE_HIGHTEMPERATURE = 'HighTemperature';
export const ERRORCODE_INTERNALERROR = 'InternalError';
export const ERRORCODE_LOCALLISTCONFLICT = 'LocalListConflict';
export const ERRORCODE_NOERROR = 'NoError';
export const ERRORCODE_OTHERERROR = 'OtherError';
export const ERRORCODE_OVERCURRENTFAILURE = 'OverCurrentFailure';
export const ERRORCODE_POWERMETERFAILURE = 'PowerMeterFailure';
export const ERRORCODE_POWERSWITCHFAILURE = 'PowerSwitchFailure';
export const ERRORCODE_READERFAILURE = 'ReaderFailure';
export const ERRORCODE_RESETFAILURE = 'ResetFailure';
export const ERRORCODE_UNDERVOLTAGE = 'UnderVoltage';
export const ERRORCODE_OVERVOLTAGE = 'OverVoltage';
export const ERRORCODE_WEAKSIGNAL = 'WeakSignal';

export const STATUS_AVAILABLE = 'Available';
export const STATUS_PREPARING = 'Preparing';
export const STATUS_CHARGING = 'Charging';
export const STATUS_SUSPENDEDEVSE = 'SuspendedEVSE';
export const STATUS_SUSPENDEDEV = 'SuspendedEV';
export const STATUS_FINISHING = 'Finishing';
export const STATUS_RESERVED = 'Reserved';
export const STATUS_UNAVAILABLE = 'Unavailable';
export const STATUS_FAULTED = 'Faulted';

export
class StatusNotification extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
