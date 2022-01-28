const User = require("../models/User");
const Category = require("../models/Category");
const bcrypt = require("bcrypt");

class AuthService {
  async hashPassword(password) {
    return await bcrypt.hash(password, 12);
  }

  async comparePasswords(password, userPassword) {
    return await bcrypt.compare(password, userPassword);
  }

  async findUser(email) {
    const result = await User.findOne({ where: { email } });

    if (!result) return false;

    return result;
  }

  async createUser(user) {
    const userResp = await User.create(user);

    if (!userResp) return false;

    console.log(userResp);

    const categoriesPromises = [
      Category.create({ name: "Home", icon: "home", userId: userResp.id }),
      Category.create({ name: "Work", icon: "work", userId: userResp.id }),
      Category.create({ name: "Sport", icon: "sport", userId: userResp.id }),
      Category.create({
        name: "Meetings",
        icon: "meetings",
        userId: userResp.id,
      }),
    ];

    const result = await Promise.all(categoriesPromises);

    if (!result) return false;

    return result;
  }
}

module.exports = new AuthService();
