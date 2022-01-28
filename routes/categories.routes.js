const router = require("express").Router();
const CategoriesController = require("../controllers/categories.controller");
const auth = require("../middleware/auth.middleware");

router
  .route("/")
  .get(auth, CategoriesController.getCategories)
  .post(auth, CategoriesController.createCategory)
  .put(auth, CategoriesController.updateCategory)
  .delete(auth, CategoriesController.deleteCategory);

module.exports = router;
