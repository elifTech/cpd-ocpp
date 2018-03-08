'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CENTRAL_SYSTEM_COMMANDS = exports.CHARGE_POINT_COMMANDS = undefined;

var _Authorize = require('./Authorize');

var _BootNotification = require('./BootNotification');

var _CancelReservation = require('./CancelReservation');

var _ChangeAvailability = require('./ChangeAvailability');

var _ChangeConfiguration = require('./ChangeConfiguration');

var _ClearCache = require('./ClearCache');

var _ClearChargingProfile = require('./ClearChargingProfile');

var _DataTransfer = require('./DataTransfer');

var _DiagnosticsStatusNotification = require('./DiagnosticsStatusNotification');

var _FirmwareStatusNotification = require('./FirmwareStatusNotification');

var _GetCompositeSchedule = require('./GetCompositeSchedule');

var _GetConfiguration = require('./GetConfiguration');

var _GetDiagnostics = require('./GetDiagnostics');

var _GetLocalListVersion = require('./GetLocalListVersion');

var _Heartbeat = require('./Heartbeat');

var _MeterValues = require('./MeterValues');

var _RemoteStartTransaction = require('./RemoteStartTransaction');

var _RemoteStopTransaction = require('./RemoteStopTransaction');

var _ReserveNow = require('./ReserveNow');

var _Reset = require('./Reset');

var _SendLocalList = require('./SendLocalList');

var _SetChargingProfile = require('./SetChargingProfile');

var _StartTransaction = require('./StartTransaction');

var _StatusNotification = require('./StatusNotification');

var _StopTransaction = require('./StopTransaction');

var _TriggerMessage = require('./TriggerMessage');

var _UnlockConnector = require('./UnlockConnector');

var _UpdateFirmware = require('./UpdateFirmware');

exports.default = {
  Authorize: _Authorize.Authorize,
  BootNotification: _BootNotification.BootNotification,
  CancelReservation: _CancelReservation.CancelReservation,
  ChangeAvailability: _ChangeAvailability.ChangeAvailability,
  ChangeConfiguration: _ChangeConfiguration.ChangeConfiguration,
  ClearCache: _ClearCache.ClearCache,
  ClearChargingProfile: _ClearChargingProfile.ClearChargingProfile,
  DataTransfer: _DataTransfer.DataTransfer,
  DiagnosticsStatusNotification: _DiagnosticsStatusNotification.DiagnosticsStatusNotification,
  FirmwareStatusNotification: _FirmwareStatusNotification.FirmwareStatusNotification,
  GetCompositeSchedule: _GetCompositeSchedule.GetCompositeSchedule,
  GetConfiguration: _GetConfiguration.GetConfiguration,
  GetDiagnostics: _GetDiagnostics.GetDiagnostics,
  GetLocalListVersion: _GetLocalListVersion.GetLocalListVersion,
  Heartbeat: _Heartbeat.Heartbeat,
  MeterValues: _MeterValues.MeterValues,
  RemoteStartTransaction: _RemoteStartTransaction.RemoteStartTransaction,
  RemoteStopTransaction: _RemoteStopTransaction.RemoteStopTransaction,
  ReserveNow: _ReserveNow.ReserveNow,
  Reset: _Reset.Reset,
  SendLocalList: _SendLocalList.SendLocalList,
  SetChargingProfile: _SetChargingProfile.SetChargingProfile,
  StartTransaction: _StartTransaction.StartTransaction,
  StatusNotification: _StatusNotification.StatusNotification,
  StopTransaction: _StopTransaction.StopTransaction,
  TriggerMessage: _TriggerMessage.TriggerMessage,
  UnlockConnector: _UnlockConnector.UnlockConnector,
  UpdateFirmware: _UpdateFirmware.UpdateFirmware
};

var CHARGE_POINT_COMMANDS = exports.CHARGE_POINT_COMMANDS = {
  Authorize: _Authorize.Authorize,
  BootNotification: _BootNotification.BootNotification,
  DataTransfer: _DataTransfer.DataTransfer,
  DiagnosticsStatusNotification: _DiagnosticsStatusNotification.DiagnosticsStatusNotification,
  FirmwareStatusNotification: _FirmwareStatusNotification.FirmwareStatusNotification,
  Heartbeat: _Heartbeat.Heartbeat,
  MeterValues: _MeterValues.MeterValues,
  StartTransaction: _StartTransaction.StartTransaction,
  StatusNotification: _StatusNotification.StatusNotification,
  StopTransaction: _StopTransaction.StopTransaction
};

var CENTRAL_SYSTEM_COMMANDS = exports.CENTRAL_SYSTEM_COMMANDS = {
  CancelReservation: _CancelReservation.CancelReservation,
  ChangeAvailability: _ChangeAvailability.ChangeAvailability,
  ChangeConfiguration: _ChangeConfiguration.ChangeConfiguration,
  ClearCache: _ClearCache.ClearCache,
  ClearChargingProfile: _ClearChargingProfile.ClearChargingProfile,
  DataTransfer: _DataTransfer.DataTransfer,
  GetCompositeSchedule: _GetCompositeSchedule.GetCompositeSchedule,
  GetConfiguration: _GetConfiguration.GetConfiguration,
  GetDiagnostics: _GetDiagnostics.GetDiagnostics,
  GetLocalListVersion: _GetLocalListVersion.GetLocalListVersion,
  RemoteStartTransaction: _RemoteStartTransaction.RemoteStartTransaction,
  RemoteStopTransaction: _RemoteStopTransaction.RemoteStopTransaction,
  ReserveNow: _ReserveNow.ReserveNow,
  Reset: _Reset.Reset,
  SendLocalList: _SendLocalList.SendLocalList,
  SetChargingProfile: _SetChargingProfile.SetChargingProfile,
  TriggerMessage: _TriggerMessage.TriggerMessage,
  UnlockConnector: _UnlockConnector.UnlockConnector,
  UpdateFirmware: _UpdateFirmware.UpdateFirmware
};
//# sourceMappingURL=index.js.map