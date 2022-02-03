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

  async updateUser(req, res) {
    try {
      const user = await UsersService.findUser(req.user.userId),
        newUser = {
          id: req.user.userId,
          ...(req.body.firstName && { firstName: req.body.firstName }),
          ...(req.body.secondName && { secondName: req.body.secondName }),
          ...(req.body.email && { email: req.body.email }),
        };

      if (req.file) {
        if (user.avatarUrl)
          require("fs").unlink(`${user.avatarUrl}`, (err) => {
            console.log(err);
          });

        newUser.avatarUrl = req.file.path.replace("\\", "/");
      }

      if (req.body.newPassword) {
        const isMatch = await UsersService.comparePasswords(
          req.body.currentPassword,
          user.password
        );

        if (!isMatch)
          return res
            .status(400)
            .send({ message: "Incorrect password, try again." });

        newUser.password = await UsersService.hashPassword(
          req.body.newPassword
        );
      }

      const result = await UsersService.updateUser(newUser);

      if (!result) throw new Error();

      res.send({ message: "User updated.", data: result });
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }

  async deleteUser(req, res) {
    try {
      const result = await UsersService.deleteUser(req.user.userId);

      if (!result) throw new Error();

      res.send({ message: "User deleted." });
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }
}

module.exports = new UsersController();
