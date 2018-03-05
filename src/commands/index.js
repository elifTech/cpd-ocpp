import { Authorize } from './Authorize';
import { BootNotification } from './BootNotification';
import { CancelReservation } from './CancelReservation';
import { ChangeAvailability } from './ChangeAvailability';
import { ChangeConfiguration } from './ChangeConfiguration';
import { ClearCache } from './ClearCache';
import { ClearChargingProfile } from './ClearChargingProfile';
import { DataTransfer } from './DataTransfer';
import { DiagnosticsStatusNotification } from './DiagnosticsStatusNotification';
import { FirmwareStatusNotification } from './FirmwareStatusNotification';
import { GetCompositeSchedule } from './GetCompositeSchedule';
import { GetConfiguration } from './GetConfiguration';
import { GetDiagnostics } from './GetDiagnostics';
import { GetLocalListVersion } from './GetLocalListVersion';
import { Heartbeat } from './Heartbeat';
import { MeterValues } from './MeterValues';
import { RemoteStartTransaction } from './RemoteStartTransaction';
import { RemoteStopTransaction } from './RemoteStopTransaction';
import { ReserveNow } from './ReserveNow';
import { Reset } from './Reset';
import { SendLocalList } from './SendLocalList';
import { SetChargingProfile } from './SetChargingProfile';
import { StartTransaction } from './StartTransaction';
import { StatusNotification } from './StatusNotification';
import { StopTransaction } from './StopTransaction';
import { TriggerMessage } from './TriggerMessage';
import { UnlockConnector } from './UnlockConnector';
import { UpdateFirmware } from './UpdateFirmware';

export default {
  Authorize,
  BootNotification,
  CancelReservation,
  ChangeAvailability,
  ChangeConfiguration,
  ClearCache,
  ClearChargingProfile,
  DataTransfer,
  DiagnosticsStatusNotification,
  FirmwareStatusNotification,
  GetCompositeSchedule,
  GetConfiguration,
  GetDiagnostics,
  GetLocalListVersion,
  Heartbeat,
  MeterValues,
  RemoteStartTransaction,
  RemoteStopTransaction,
  ReserveNow,
  Reset,
  SendLocalList,
  SetChargingProfile,
  StartTransaction,
  StatusNotification,
  StopTransaction,
  TriggerMessage,
  UnlockConnector,
  UpdateFirmware
};

export
const CHARGE_POINT_COMMANDS = {
  Authorize,
  BootNotification,
  DataTransfer,
  DiagnosticsStatusNotification,
  FirmwareStatusNotification,
  Heartbeat,
  MeterValues,
  StartTransaction,
  StatusNotification,
  StopTransaction
};

export
const CENTRAL_SYSTEM_COMMANDS = {
  CancelReservation,
  ChangeAvailability,
  ChangeConfiguration,
  ClearCache,
  ClearChargingProfile,
  DataTransfer,
  GetCompositeSchedule,
  GetConfiguration,
  GetDiagnostics,
  GetLocalListVersion,
  RemoteStartTransaction,
  RemoteStopTransaction,
  ReserveNow,
  Reset,
  SendLocalList,
  SetChargingProfile,
  TriggerMessage,
  UnlockConnector,
  UpdateFirmware
};
