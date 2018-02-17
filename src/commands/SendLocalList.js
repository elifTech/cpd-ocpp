import BaseCommand from './BaseCommand';

import requestSchema from '../../ocpp-1.6-schemas/SendLocalList';
import responseSchema from '../../ocpp-1.6-schemas/SendLocalListResponse';

export const IDTAGINFO_STATUS_ACCEPTED = 'Accepted';
export const IDTAGINFO_STATUS_BLOCKED = 'Blocked';
export const IDTAGINFO_STATUS_EXPIRED = 'Expired';
export const IDTAGINFO_STATUS_INVALID = 'Invalid';
export const IDTAGINFO_STATUS_CONCURRENTTX = 'ConcurrentTx';

export const UPDATE_TYPE_DIFFERENTIAL = 'Differential';
export const UPDATE_TYPE_FULL = 'Full';

export const STATUS_ACCEPTED = 'Accepted';
export const STATUS_FAILED = 'Failed';
export const STATUS_NOTSUPPORTED = 'NotSupported';
export const STATUS_VERSIONMISMATCH = 'VersionMismatch';

export
class SendLocalList extends BaseCommand {
  constructor (values) {
    super(requestSchema, responseSchema, values);
  }
}
