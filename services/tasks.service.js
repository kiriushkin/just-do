const Task = require("../models/Task");

class TasksService {
  async getTasks(userId) {
    const result = await Task.findAll({ where: { userId } });

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
      where: { id: task.id },
    });

    if (!result) return false;

    return result;
  }

  async deleteTask(id) {
    const result = await Task.destroy({ where: { id } });

    if (!result) return false;

    return result;
  }
}

module.exports = new TasksService();
