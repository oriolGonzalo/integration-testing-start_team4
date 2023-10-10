import { ErrorCode } from "./ErrorCode.js"

export class DomainError extends Error {
  constructor(code, message) {
    super(message)
    this.code = code
  }
}
