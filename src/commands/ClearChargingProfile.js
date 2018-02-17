import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/ClearChargingProfile';
import responseSchema from '../../ocpp-1.6-schemas/ClearChargingProfileResponse';

export const CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = 'ChargePointMaxProfile';
export const CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = 'TxDefaultProfile';
export const CHARGING_PROFILE_PURPOSE_TXPROFILE = 'TxProfile';

export const STATUS_ACCEPTED = 'Accepted';
export const STATUS_UNKNOWN = 'Unknown';

export
class ClearChargingProfile extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
