const router = require("express").Router();

router.get("/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const readStream = require("fs").createReadStream(`images/${imageName}`);
  readStream.pipe(res);
});

module.exports = router;
