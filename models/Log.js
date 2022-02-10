const { Sequelize, sequelize } = require("../services/sequelize");

const Log = sequelize.define("log", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  endpoint: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Logs table synced.");
  })
  .catch((e) => console.log(e));

module.exports = Log;
