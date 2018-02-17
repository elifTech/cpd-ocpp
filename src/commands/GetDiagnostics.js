import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/GetDiagnostics';
import responseSchema from '../../ocpp-1.6-schemas/GetDiagnosticsResponse';

export
class GetDiagnostics extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
