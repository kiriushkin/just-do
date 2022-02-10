const TasksService = require("../services/tasks.service");
const LogsService = require("../services/logs.service");

class TasksController {
  async getTasks(req, res) {
    try {
      let result;
      if (req.query.id)
        result = await TasksService.getTask(req.user.userId, req.query.id);
      else if (req.query.ids)
        result = await TasksService.getTasks(req.user.userId, req.query.ids);
      else result = await TasksService.getTasks(req.user.userId);

      if (!result) throw new Error();

      res.send(result);
    } catch (e) {
      LogsService.createLog({
        type: "error",
        endpoint: req.originalUrl,
        message: e.message,
      });

      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }

  async createTask(req, res) {
    try {
      req.body.userId = req.user.userId;

      const result = await TasksService.createTask(req.body);

      if (!result) throw new Error();

      LogsService.createLog({
        type: "success",
        endpoint: req.originalUrl,
        message: `${result.name} task created for user ${req.user.userId}`,
      });

      res.status(201).send({ message: "Task created.", data: result });
    } catch (e) {
      LogsService.createLog({
        type: "error",
        endpoint: req.originalUrl,
        message: e.message,
      });

      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }

  async updateTask(req, res) {
    try {
      const result = await TasksService.updateTask(req.body);

      if (!result) throw new Error();

      LogsService.createLog({
        type: "success",
        endpoint: req.originalUrl,
        message: `${result.name} task updated for user ${req.user.userId}`,
      });

      res.status(200).send({ message: "Task updated.", data: result });
    } catch (e) {
      LogsService.createLog({
        type: "error",
        endpoint: req.originalUrl,
        message: e.message,
      });

      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }

  async deleteTask(req, res) {
    try {
      const result = await TasksService.deleteTask(req.body.id);

      if (!result) throw new Error();

      LogsService.createLog({
        type: "success",
        endpoint: req.originalUrl,
        message: `${req.body.id} task created for user ${req.user.userId}`,
      });

      res.status(200).send({ message: "Task deleted." });
    } catch (e) {
      LogsService.createLog({
        type: "error",
        endpoint: req.originalUrl,
        message: e.message,
      });

      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }
}

module.exports = new TasksController();
