const db = require("../models");
const Category = db.category;

checkDuplicateCategoryName = async (req, res, next) => {
  try {
    const categoryName = await Category.findOne({
      name: { $regex: new RegExp(`^${req.body.name}$`, "i") },
    }).exec();
    if (categoryName) {
      return res.status(400).send({ message: "Tên phân loại đã tồn tại!" });
    }

    next();
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const verifyCategory = {
  checkDuplicateCategoryName,
};

module.exports = verifyCategory;
