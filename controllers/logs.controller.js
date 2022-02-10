const LogsService = require("../services/logs.service");

class LogsController {
  async getLogs(req, res) {
    try {
      const logs = await LogsService.getLogs(req.query.type || "all");

      const pageCount = Math.ceil(logs.length / 10);
      let page = parseInt(req.query.p);

      if (!page) page = 1;

      if (page > pageCount) page = pageCount;

      res.send({
        page: page,
        pageCount: pageCount,
        logs: logs.slice(page * 10 - 10, page * 10),
      });
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }
}

module.exports = new LogsController();
