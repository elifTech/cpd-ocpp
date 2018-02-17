import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/BootNotification';
import responseSchema from '../../ocpp-1.6-schemas/BootNotificationResponse';

export const STATUS_ACCEPTED = 'Accepted';
export const STATUS_PENDING = 'Pending';
export const STATUS_REJECTED = 'Rejected';

export
class BootNotification extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
