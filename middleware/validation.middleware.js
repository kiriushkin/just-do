const { body } = require("express-validator");

module.exports = [
  body("email").isEmail().normalizeEmail(),
  body("password").custom((value) => {
    return (
      value.length >= 8 &&
      !value.match(/\s/) &&
      value.length - value.replace(/[A-Z]/g, "").length >= 2 &&
      value.match(/\W/) &&
      value.match(/\d/)
    );
  }),
];
