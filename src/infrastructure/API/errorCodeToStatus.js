import { ErrorCode } from "../../domain/errors/ErrorCode.js"

const errorCodeToStatusMap = {
  [ErrorCode.INVALID_PARAMS]: 400,
  [ErrorCode.USER_ALREADY_EXISTS]: 400,
  [ErrorCode.INVALID_EMAIL]: 400,
  [ErrorCode.INVALID_AGE]: 400,
  [ErrorCode.POST_NOT_FOUND]: 404,
  [ErrorCode.PASSWORD_TOO_SMALL]: 400,
  [ErrorCode.UNKNOWN]: 500,
}

export function errorCodeToStatus(code) {
  return errorCodeToStatusMap[code] ?? 500
}
