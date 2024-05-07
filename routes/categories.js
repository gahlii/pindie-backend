const { sendCategoryCreated, sendAllCategories, sendCategoryById, sendCategoryUpdated } = require('../controllers/categories');
const { findAllCategories, createCategory, findCategoryById, updateCategory } = require('../middlewares/categories');
const categoriesRouter = require('express').Router();
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post(
    "/categories",
    findAllCategories,
    createCategory,
    sendCategoryCreated
  );

categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById)
categoriesRouter.put('/categories/:id', updateCategory, sendCategoryUpdated)
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
  