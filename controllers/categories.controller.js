const CategoriesService = require("../services/categories.service");

class CategoriesController {
  async getCategories(req, res) {
    try {
      const result = await CategoriesService.getCategories(req.user.userId);

      if (!result) throw new Error();

      res.send(result);
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }

  async createCategory(req, res) {
    try {
      req.body.userId = req.user.userId;

      const result = await CategoriesService.createCategory(req.body);

      if (!result) throw new Error();

      res.status(201).send({ message: "Category created.", data: result });
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }

  async updateCategory(req, res) {
    try {
      const result = await CategoriesService.updateCategory(req.body);

      if (!result) throw new Error();

      res.send({ message: "Category updated." });
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }

  async deleteCategory(req, res) {
    try {
      const result = await CategoriesService.deleteCategory(req.body.id);

      if (!result) throw new Error();

      res.send({ message: "Category deleted." });
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong, try again.",
        error: e.message,
      });
    }
  }
}

module.exports = new CategoriesController();
