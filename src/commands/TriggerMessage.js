import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/TriggerMessage';
import responseSchema from '../../ocpp-1.6-schemas/TriggerMessageResponse';

export const REQUESTED_MESSAGE_BOOTNOTIFICATION = 'BootNotification';
export const REQUESTED_MESSAGE_DIAGNOSTICSSTATUSNOTIFICATION = 'DiagnosticsStatusNotification';
export const REQUESTED_MESSAGE_FIRMWARESTATUSNOTIFICATION = 'FirmwareStatusNotification';
export const REQUESTED_MESSAGE_HEARTBEAT = 'Heartbeat';
export const REQUESTED_MESSAGE_METERVALUES = 'MeterValues';
export const REQUESTED_MESSAGE_STATUSNOTIFICATION = 'StatusNotification';

export const STATUS_ACCEPTED = 'Accepted';
export const STATUS_REJECTED = 'Rejected';
export const STATUS_NOTIMPLEMENTED = 'NotImplemented';

export
class TriggerMessage extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
