const GroupsService = require("../services/groups.service");

class GroupsController {
  async getGroups(req, res) {
    try {
      const result = await GroupsService.getGroups(req.user.userId);

      if (!result) throw new Error();

      res.send(result);
    } catch (e) {
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

      res.status(201).send({ message: "Group created.", data: result });
    } catch (e) {
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

      res.status(200).send({ message: "Group updated.", data: result });
    } catch (e) {
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

      res.status(200).send({ message: "Group deleted." });
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }
}

module.exports = new GroupsController();
