import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/ChangeAvailability';
import responseSchema from '../../ocpp-1.6-schemas/ChangeAvailabilityResponse';

export const TYPE_INOPERATIVE = 'Inoperative';
export const TYPE_OPERATIVE = 'Operative';

export const STATUS_ACCEPTED = 'Accepted';
export const STATUS_REJECTED = 'Rejected';
export const STATUS_SCHEDULED = 'Scheduled';

export
class ChangeAvailability extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
