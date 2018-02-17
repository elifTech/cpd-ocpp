import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/RemoteStopTransaction';
import responseSchema from '../../ocpp-1.6-schemas/RemoteStopTransactionResponse';

export const STATUS_ACCEPTED = 'Accepted';
export const STATUS_REJECTED = 'Rejected';

export
class RemoteStopTransaction extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
