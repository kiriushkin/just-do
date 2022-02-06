const cron = require("node-cron");
const { Op } = require("sequelize");
const Task = require("../models/Task");

const onConnection = (socket) => {
  socket.join(socket.handshake.query.id);
};

const startCron = (io) => {
  cron.schedule("0 */1 * * * *", async () => {
    const tasks = await Task.findAll({
      raw: true,
      where: { status: { [Op.not]: "expired" } },
    });

    if (tasks.length === 0) return;

    tasks.map(async (task) => {
      try {
        if (new Date() > new Date(task.deadline)) {
          const newTask = { ...task, status: "expired" };

          await Task.update(newTask, { where: { id: newTask.id } });
        } else if (
          new Date() > new Date(task.remindAt) &&
          task.status != "reminded"
        ) {
          io.to(task.userId.toString()).emit("reminder", task.id);

          const newTask = { ...task, status: "reminded" };

          await Task.update(newTask, { where: { id: newTask.id } });
        }
      } catch (e) {
        console.log(e);
      }
    });
  });

  cron.schedule("0 0 18 * * *", async () => {
    const tasks = await Task.findAll({
      raw: true,
      where: { status: "expired" },
      order: [
        ["userId", "ASC"],
        ["id", "ASC"],
      ],
    });

    let id = 0,
      idsToSend = [];

    tasks.forEach((task) => {
      if (id != task.userId) {
        if (idsToSend.length > 0)
          io.to(id.toString()).emit("expired", idsToSend);

        idsToSend = [];
        id = task.userId;
      }

      idsToSend.push(task.id);
    });

    if (idsToSend.length > 0) io.to(id.toString()).emit("expired", idsToSend);
  });
};

module.exports = { onConnection, startCron };
