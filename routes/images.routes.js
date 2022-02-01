const router = require("express").Router();
const fs = require("fs");

router.get("/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  fs.stat(`images/${imageName}`, (err) => {
    if (!err) {
      const readStream = fs.createReadStream(`images/${imageName}`);
      readStream.pipe(res);
    } else {
      return res.status(404).send({ message: "Image not found." });
    }
  });
});

module.exports = router;
