
const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
  req.categoriesArray = await categories.find({});
  next();
}
const createCategory = async (req, res, next) => {
  console.log("POST /categories");
  try {
    req.category = await categories.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Error creating category" });
  }
};
const findCategoryById = async (req, res, next) => {
  console.log("GET /categories/:id");
  try {
    req.category = await categories.findById(req.params.id);
    next();
  } catch (error) {
    res.status(404).send({ message: "Category not found" });
  }
}; 

module.exports = {findAllCategories, createCategory, findCategoryById};