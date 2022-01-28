const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "images/" });
const validation = require("../middleware/validation.middleware");
const AuthController = require("../controllers/auth.controller");

router.post("/checkemail", AuthController.checkEmail);

router.post(
  "/register",
  upload.single("image"),
  validation,
  AuthController.register
);

router.post("/login", validation, AuthController.login);

module.exports = router;
