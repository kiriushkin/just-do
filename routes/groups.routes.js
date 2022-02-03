const router = require("express").Router();
const GroupsController = require("../controllers/groups.controller");
const auth = require("../middleware/auth.middleware");

router
  .route("/")
  .get(auth, GroupsController.getGroups)
  .post(auth, GroupsController.createGroup)
  .put(auth, GroupsController.updateGroup)
  .delete(auth, GroupsController.deleteGroup);

module.exports = router;
