const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/images", require("./images.routes"));
router.use("/categories", require("./categories.routes"));

module.exports = router;
