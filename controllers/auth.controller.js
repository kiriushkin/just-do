const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const AuthService = require("../services/auth.service");

class AuthController {
  async checkEmail(req, res) {
    try {
      let result = await AuthService.findUser(req.body.email);

      if (result) {
        return res.status(400).send({ message: "User already exists." });
      }

      res.send({ message: "Email is free." });
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }

  async register(req, res) {
    try {
      const errors = validationResult(req);

      //console.log(req.body);

      if (!errors.isEmpty()) {
        for (let e of errors.errors) {
          console.log(e.msg);
        }

        if (req.file)
          require("fs").unlink(`${req.file.path.replace("\\", "/")}`, (err) => {
            if (err) throw err;
          });

        return res
          .status(400)
          .send({ message: "Incorrect registration data." });
      }

      const { password } = req.body;

      if (req.file) req.body.avatarUrl = req.file.path.replace("\\", "/");

      let result = await AuthService.findUser(req.body.email);

      if (result) {
        if (req.file)
          require("fs").unlink(`${req.file.path.replace("\\", "/")}`, (err) => {
            console.log(err);
          });

        return res.status(400).send({ message: "User already exists." });
      }

      req.body.password = await AuthService.hashPassword(req.body.password);

      result = AuthService.createUser(req.body);

      if (!result) throw new Error();

      res.status(201).send({ message: "User created." });
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }

  async login(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).send({ message: "Incorrect login data." });
      }

      const { email, password } = req.body;

      const user = await AuthService.findUser(email);

      if (!user) return res.status(400).send({ message: "User not found." });

      const isMatch = await AuthService.comparePasswords(
        password,
        user.password
      );

      if (!isMatch)
        return res
          .status(400)
          .send({ message: "Incorrect password, try again." });

      const token = jwt.sign({ userId: user.id }, process.env.JWTSECRET, {
        expiresIn: "30d",
      });

      res.send({ token, userId: user.id });
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }
}

module.exports = new AuthController();
