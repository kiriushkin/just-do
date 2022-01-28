const { Sequelize, sequelize } = require("../services/sequelize");
const User = require("./User");

const Category = sequelize.define("category", {
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
  icon: {
    type: Sequelize.STRING(50),
  },
});

Category.belongsTo(User);

sequelize
  .sync()
  .then(() => {
    console.log("Categories table synced.");
  })
  .catch((e) => console.log(e));

module.exports = Category;
