import crypto from "node:crypto"
import { PasswordTooSmallError } from "../errors/PasswordTooSmallError.js"

export class UserPassword {
  static fromPlain(plainPassword) {
    if (plainPassword.length < 6) {
      throw new PasswordTooSmallError()
    }

    const hashed = crypto.createHash("sha256").update(plainPassword).digest().toString("hex")

    return new UserPassword(hashed)
  }

  constructor(password) {
    this.password = password
  }

  compareWith(plainPassword) {
    const hash = crypto.createHash("sha256").update(plainPassword).digest().toString("hex")

    return this.password === hash
  }
}
