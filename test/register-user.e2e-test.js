import { describe, expect, it, beforeAll, afterAll, beforeEach } from "vitest"
import { Server } from "../src/infrastructure/API/Server"
import tepper from "tepper"

const user = {
  name: "pepi",
  email: "pepi2@email.com",
  password: "123456",
  age: 19,
}

describe("POST /users/register", () => {
  let server

  beforeAll(async () => {
    server = Server.createForTesting()
    await server.connect()
  })

  afterAll(async () => {
    await server.disconnect()
  })

  beforeEach(async () => {
    await server.reset()
  })

  it("return status ok", async () => {
    const { body } = await tepper(server.app).post("/users/register").send(user).run()

    expect(body).toEqual({ status: "ok" })
  })
})
