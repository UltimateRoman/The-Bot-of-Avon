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

const Works = sequelize.define("works", {
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
  },
  title: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  longTitle: {
      type: Sequelize.STRING,
  },
  year: {
      type: Sequelize.INTEGER,
  },
  genre: {
      type: Sequelize.STRING,
  },
  pic: {
      type: Sequelize.STRING,
  },
  desc: {
      type: Sequelize.STRING(1234),
  },
}, {
      timestamps: false
});


module.exports = Works;