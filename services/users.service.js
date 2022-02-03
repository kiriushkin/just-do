const bcrypt = require("bcrypt");
const User = require("../models/User");
const BlockedUser = require("../models/BlockedUser");

class UsersService {
  async hashPassword(password) {
    return await bcrypt.hash(password, 12);
  }

  async comparePasswords(password, userPassword) {
    return await bcrypt.compare(password, userPassword);
  }

  async findUser(id) {
    const result = await User.findOne({ where: { id } });

    if (!result) return false;

    return result;
  }

  async updateUser(user) {
    const result = await User.update(user, {
      returning: true,
      where: { id: user.id },
    });

    if (!result) return false;

    return result[1][0];
  }

  async deleteUser(id) {
    const deleteResult = await User.destroy({
      where: { id },
    });
    const createResult = await BlockedUser.create({ id });

    if (!deleteResult || !createResult) return false;

    return true;
  }
}

module.exports = new UsersService();
