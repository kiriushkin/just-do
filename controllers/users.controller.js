const UsersService = require("../services/users.service");

class UsersController {
  async getUser(req, res) {
    try {
      const result = await UsersService.findUser(req.user.userId);

      if (!result) return res.status(400).send({ message: "User not found." });

      const { id, email, firstName, lastName, avatarUrl } = result;

      const user = { id, email, firstName, lastName, avatarUrl };

      res.send(user);
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }
}

module.exports = new UsersController();
