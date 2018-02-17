import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/GetConfiguration';
import responseSchema from '../../ocpp-1.6-schemas/GetConfigurationResponse';

export
class GetConfiguration extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
