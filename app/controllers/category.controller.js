const db = require("../models");
const Category = db.category;

exports.addCategory = async (req, res) => {
  try {
    const newCategory = new Category({
      name: req.body.name,
    });
    const savedCategory = await newCategory.save();
    res.status(201).send(savedCategory);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).send(categories);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).send({ message: "Không tìm thấy phân loại này." });
    }

    res.status(200).send(category);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      {
        name: req.body.name,
        // Update other properties as needed
      },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).send({ message: "Không tìm thấy phân loại này." });
    }

    res.status(200).send(updatedCategory);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await Category.findByIdAndRemove(categoryId);

    if (!deletedCategory) {
      return res.status(404).send({ message: "Không tìm thấy phân loại này." });
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
