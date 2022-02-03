const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/images", require("./images.routes"));
router.use("/categories", require("./categories.routes"));
router.use("/tasks", require("./tasks.routes"));
router.use("/users", require("./users.routes"));
router.use("/groups", require("./groups.routes"));

module.exports = router;
