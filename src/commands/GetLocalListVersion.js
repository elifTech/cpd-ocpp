import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/GetLocalListVersion';
import responseSchema from '../../ocpp-1.6-schemas/GetLocalListVersionResponse';

export
class GetLocalListVersion extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
