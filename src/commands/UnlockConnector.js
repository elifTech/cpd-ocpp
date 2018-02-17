import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/UnlockConnector';
import responseSchema from '../../ocpp-1.6-schemas/UnlockConnectorResponse';

export const STATUS_UNLOCKED = 'Unlocked';
export const STATUS_UNLOCKFAILED = 'UnlockFailed';
export const STATUS_NOTSUPPORTED = 'NotSupported';

export
class UnlockConnector extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
