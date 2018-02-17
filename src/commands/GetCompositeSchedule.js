import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/GetCompositeSchedule';
import responseSchema from '../../ocpp-1.6-schemas/GetCompositeScheduleResponse';

export const STATUS_ACCEPTED = 'Accepted';
export const STATUS_REJECTED = 'Rejected';

export const CHARGING_RATE_UNIT_A = 'A';
export const CHARGING_RATE_UNIT_W = 'W';

export
class GetCompositeSchedule extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
