const Category = require("../models/Category");

class CategoriesService {
  async getCategories(userId) {
    const resp = await Category.findAll({ where: { userId } });

    if (!resp) return false;

    return resp;
  }

  async createCategory(category) {
    const resp = await Category.create(category);

    if (!resp) return false;

    return resp;
  }

  async updateCategory(category) {
    const resp = await Category.update(category, {
      returning: true,
      where: { id: category.id },
    });

    if (!resp) return false;

    return resp[1][0];
  }

  async deleteCategory(id) {
    const resp = await Category.destroy({ where: { id } });

    if (!resp) return false;

    return resp;
  }
}

module.exports = new CategoriesService();
