const Group = require("../models/Group");

class GroupsService {
  async getGroups(userId) {
    const result = await Group.findAll({ where: { userId } });

    if (!result) return false;

    return result;
  }

  async createGroup(group) {
    const result = await Group.create(group);

    if (!result) return false;

    return result;
  }

  async updateGroup(group) {
    const result = await Group.update(group, {
      returning: true,
      where: { id: group.id },
    });

    if (!result) return false;

    return result[1][0];
  }

  async deleteGroup(id) {
    const result = await Group.destroy({ where: { id } });

    if (!result) return false;

    return result;
  }
}

module.exports = new GroupsService();
