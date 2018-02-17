// ## MessageType constants
//
// To identify the type of message one of the following Message Type Numbers MUST be used.
//
// When a server receives a message with a Message Type Number not in this list, it SHALL ignore the
// message payload. Each message type may have additional required fields.
export const CALL_MESSAGE = 2; // Client-to-Server
export const CALLRESULT_MESSAGE = 3; // Server-to-Client
export const CALLERROR_MESSAGE = 4; // Server-to-Client
