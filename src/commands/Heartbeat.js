import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/Heartbeat';
import responseSchema from '../../ocpp-1.6-schemas/HeartbeatResponse';

export
class Heartbeat extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
