import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/UpdateFirmware';
import responseSchema from '../../ocpp-1.6-schemas/UpdateFirmwareResponse';

export
class UpdateFirmware extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
