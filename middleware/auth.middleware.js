const jwt = require("jsonwebtoken");
const BlockedUser = require("../models/BlockedUser");

module.exports = async (req, res, next) => {
  if (req.method === "OPTIONS") return next();

  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token)
      return res.status(401).send({ message: "Authorization required." });

    const decoded = jwt.verify(token, process.env.JWTSECRET);

    req.user = decoded;

    const result = await BlockedUser.findByPk(decoded.userId);

    if (result)
      return res.status(401).send({ message: "User deleted or blocked." });

    next();
  } catch (e) {
    res.status(401).send({ message: "Authorization required." });
  }
};
