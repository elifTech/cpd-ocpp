import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/ReserveNow';
import responseSchema from '../../ocpp-1.6-schemas/ReserveNowResponse';

export const STATUS_ACCEPTED = 'Accepted';
export const STATUS_FAULTED = 'Faulted';
export const STATUS_OCCUPIED = 'Occupied';
export const STATUS_REJECTED = 'Rejected';
export const STATUS_UNAVAILABLE = 'Unavailable';

export
class ReserveNow extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
