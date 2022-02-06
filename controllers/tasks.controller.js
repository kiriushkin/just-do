const TasksService = require("../services/tasks.service");

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

      res.status(201).send({ message: "Task created.", data: result });
    } catch (e) {
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

      res.status(200).send({ message: "Task updated.", data: result });
    } catch (e) {
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

      res.status(200).send({ message: "Task deleted." });
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }
}

module.exports = new TasksController();
