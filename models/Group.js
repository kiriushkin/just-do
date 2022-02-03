const { Sequelize, sequelize } = require("../services/sequelize");
const User = require("./User");

const Group = sequelize.define("task_group", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});

Group.belongsTo(User);

sequelize
  .sync()
  .then(() => {
    console.log("Task groups table synced.");
  })
  .catch((e) => console.log(e));

module.exports = Group;
