import { EmailSender } from "../../domain/services/EmailSender.js"
import { config } from "../Shared/config.js"

export class EmailSenderMailgun extends EmailSender {
  constructor({
    domain = config.mailgun.domain,
    authUser = config.mailgun.authUser,
    apiKey = config.mailgun.apiKey,
  } = {}) {
    super()
    this.domain = domain
    this.authUser = authUser
    this.apiKey = apiKey
    console.log(this.apiKey)
    console.log(this.domain)
    console.log(this.authUser)
  }

  async sendWelcomeEmail(user) {
    const body = new FormData()
    const domain = this.domain

    body.append("from", `Pepe Juan <mailgun@${domain}>`)
    body.append("to", user.email.email)
    body.append("subject", "Hello")
    body.append("template", "welcome")
    body.append("t:variables", JSON.stringify({ name: user.name }))

    console.log("------0-------")

    console.log(body)

    const response = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body,
    })

    if (response.status === 401) {
      throw new Error("Invalid API key")
    }

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message)
    }
  }

  getAuthHeaders() {
    return {
      Authorization: "Basic " + btoa(this.authUser + ":" + this.apiKey),
    }
  }
}
