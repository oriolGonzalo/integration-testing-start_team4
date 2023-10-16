import "dotenv/config"

export const config = {
  mailgun: {
    domain: "sandbox7921b22d68c24f81b170f41e4f4a0d6c.mailgun.org",
    authUser: "api",
    apiKey: process.env.MAILGUN_API_KEY,
  },
  testInbox: {
    namespace: "9eqfr",
    apiKey: process.env.TESTMAIL_API_KEY,
  },
  postgres: {
    user: "admin",
    host: "localhost",
    database: "my-project",
    password: process.env.POSTGRES_PASSWORD || "password",
  },
  mongo: {
    user: "admin",
    password: process.env.MONGO_PASSWORD || "password",
    address: "localhost",
    port: "27017",
  },
}
