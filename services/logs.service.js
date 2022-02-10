const Log = require("../models/Log");

class LogsService {
  async getLogs(type) {
    let result;

    if (type === "all")
      result = await Log.findAll({ raw: true, order: [["createdAt", "DESC"]] });
    else
      result = await Log.findAll({
        raw: true,
        where: { type },
        order: [["createdAt", "DESC"]],
      });

    if (!result) return false;

    return result;
  }

  async createLog(log) {
    const result = await Log.create(log);

    if (!result) return false;

    return result;
  }
}

module.exports = new LogsService();
