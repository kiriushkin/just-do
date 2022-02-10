const express = require("express");
const router = express.Router();
const LogsController = require("../controllers/logs.controller.js");

router.get("/", LogsController.getLogs);

module.exports = router;
