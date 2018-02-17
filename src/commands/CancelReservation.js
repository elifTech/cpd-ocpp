import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/CancelReservation';
import responseSchema from '../../ocpp-1.6-schemas/CancelReservationResponse';

export const STATUS_ACCEPTED = 'Accepted';
export const STATUS_REJECTED = 'Rejected';

export
class CancelReservation extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
