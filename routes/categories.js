const { sendCategoryCreated, sendAllCategories, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');
const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory } = require('../middlewares/categories');
const { checkIsCategoryExists, checkEmptyName } = require('../middlewares/checkers');

const categoriesRouter = require('express').Router();
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
); 
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;