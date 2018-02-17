import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/Reset';
import responseSchema from '../../ocpp-1.6-schemas/ResetResponse';

export const TYPE_HARD = 'Hard';
export const TYPE_SOFT = 'Soft';

export const STATUS_ACCEPTED = 'Accepted';
export const STATUS_REJECTED = 'Rejected';

export
class Reset extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
