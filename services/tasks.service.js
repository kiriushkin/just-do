const Task = require("../models/Task");

class TasksService {
  async getTask(userId, id) {
    const result = await Task.findOne({ raw: true, where: { userId, id } });

    if (!result) return false;

    return result;
  }

  async getTasks(userId, ids) {
    let result = [];
    if (!ids) result = await Task.findAll({ raw: true, where: { userId } });
    else {
      ids = ids.split(",");

      for (let id of ids) {
        const resp = await Task.findOne({ raw: true, where: { userId, id } });
        result.push(resp);
      }
    }

    if (!result) return false;

    return result;
  }

  async createTask(task) {
    const result = await Task.create(task);

    if (!result) return false;

    return result;
  }

  async updateTask(task) {
    const result = await Task.update(task, {
      returning: true,
      where: { id: task.id },
    });

    if (!result) return false;

    return result[1][0];
  }

  async deleteTask(id) {
    const result = await Task.destroy({ where: { id } });

    if (!result) return false;

    return result;
  }
}

module.exports = new TasksService();
