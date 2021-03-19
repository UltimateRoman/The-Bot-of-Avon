const Sequelize = require("sequelize-cockroachdb");
const fs = require("fs");
const { username, password } = require("./config.json");

var sequelize = new Sequelize({
    dialect: "postgres",
    username,
    password,
    host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
    database: "taut-wolf-1309.defaultdb",
    port: 26257,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync("./certs/cc-ca.crt").toString(),
      },
    },
    logging: false,
});