const { Sequelize, sequelize } = require("../services/sequelize");

const BlockedUser = sequelize.define("blocked_user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Blocked Users table synced.");
  })
  .catch((e) => console.log(e));

module.exports = BlockedUser;
