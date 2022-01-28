const { Sequelize, sequelize } = require("../services/sequelize");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avatarUrl: {
    type: Sequelize.STRING,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("User table synced.");
  })
  .catch((e) => console.log(e));

module.exports = User;
