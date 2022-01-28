const router = require("express").Router();
const TasksController = require("../controllers/tasks.controller");
const auth = require("../middleware/auth.middleware");

router
  .route("/")
  .get(auth, TasksController.getTasks)
  .post(auth, TasksController.createTask)
  .put(auth, TasksController.updateTask)
  .delete(auth, TasksController.deleteTask);

module.exports = router;
