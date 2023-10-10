import { InvalidAgeError } from "../errors/InvalidAgeError.js"

export class UserAge {
  constructor(age) {
    this.age = age

    if (age < 18) {
      throw new InvalidAgeError()
    }
  }

  equals(other) {
    return this.age === other.age
  }
}
