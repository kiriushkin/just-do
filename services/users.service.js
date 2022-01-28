const User = require("../models/User");

class UsersService {
  async findUser(id) {
    const result = await User.findOne({ where: { id } });

    if (!result) return false;

    return result;
  }
}

module.exports = new UsersService();
