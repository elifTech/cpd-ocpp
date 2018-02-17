import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/RemoteStartTransaction';
import responseSchema from '../../ocpp-1.6-schemas/RemoteStartTransactionResponse';

export const CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = 'ChargePointMaxProfile';
export const CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = 'TxDefaultProfile';
export const CHARGING_PROFILE_PURPOSE_TXPROFILE = 'TxProfile';

export const CHARGING_PROFILE_KIND_ABSOLUTE = 'Absolute';
export const CHARGING_PROFILE_KIND_RECURRING = 'Recurring';
export const CHARGING_PROFILE_KIND_RELATIVE = 'Relative';

export const RECURRENCY_KIND_DAILY = 'Daily';
export const RECURRENCY_KIND_WEEKLY = 'Weekly';

export const CHARGING_RATE_UNIT_A = 'A';
export const CHARGING_RATE_UNIT_W = 'W';

export const STATUS_ACCEPTED = 'Accepted';
export const STATUS_REJECTED = 'Rejected';

export
class RemoteStartTransaction extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
