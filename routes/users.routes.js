const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users.controller");
const auth = require("../middleware/auth.middleware");

router.get("/", auth, UsersController.getUser);

module.exports = router;
