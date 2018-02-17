import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/DiagnosticsStatusNotification';
import responseSchema from '../../ocpp-1.6-schemas/DiagnosticsStatusNotificationResponse';

export const STATUS_IDLE = 'Idle';
export const STATUS_UPLOADED = 'Uploaded';
export const STATUS_UPLOADFAILED = 'UploadFailed';
export const STATUS_UPLOADING = 'Uploading';

export
class DiagnosticsStatusNotification extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
