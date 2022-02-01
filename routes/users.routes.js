const express = require("express");
const router = express.Router();
const multer = require("multer");
const usersController = require("../controllers/users.controller");
const upload = multer({ dest: "images/" });
const UsersController = require("../controllers/users.controller");
const auth = require("../middleware/auth.middleware");

router
  .route("/")
  .get(auth, UsersController.getUser)
  .put(auth, upload.single("image"), UsersController.updateUser)
  .delete(auth, usersController.deleteUser);

module.exports = router;
