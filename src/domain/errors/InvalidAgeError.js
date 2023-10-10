import { DomainError } from "./DomainError.js"
import { ErrorCode } from "./ErrorCode.js"

export class InvalidAgeError extends DomainError {
  constructor() {
    super(ErrorCode.INVALID_AGE, "User must be 18 or older.")
  }
}
