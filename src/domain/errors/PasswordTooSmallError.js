import { DomainError } from "./DomainError.js"
import { ErrorCode } from "./ErrorCode.js"

export class PasswordTooSmallError extends DomainError {
  constructor() {
    super(ErrorCode.PASSWORD_TOO_SMALL, "Password must be 6 characters or longer.")
  }
}
