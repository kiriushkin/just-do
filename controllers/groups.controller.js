const GroupsService = require("../services/groups.service");
const LogsService = require("../services/logs.service");

class GroupsController {
  async getGroups(req, res) {
    try {
      const result = await GroupsService.getGroups(req.user.userId);

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

  async createGroup(req, res) {
    try {
      req.body.userId = req.user.userId;

      const result = await GroupsService.createGroup(req.body);

      if (!result) throw new Error();

      LogsService.createLog({
        type: "success",
        endpoint: req.originalUrl,
        message: `${result.name} group created for user ${req.user.userId}`,
      });

      res.status(201).send({ message: "Group created.", data: result });
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

  async updateGroup(req, res) {
    try {
      const result = await GroupsService.updateGroup(req.body);

      if (!result) throw new Error();

      LogsService.createLog({
        type: "success",
        endpoint: req.originalUrl,
        message: `${result.name} group updated for user ${req.user.userId}`,
      });

      res.status(200).send({ message: "Group updated.", data: result });
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

  async deleteGroup(req, res) {
    try {
      const result = await GroupsService.deleteGroup(req.body.id);

      if (!result) throw new Error();

      LogsService.createLog({
        type: "success",
        endpoint: req.originalUrl,
        message: `${req.body.id} group deleted for user ${req.user.userId}`,
      });

      res.status(200).send({ message: "Group deleted." });
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

module.exports = new GroupsController();
