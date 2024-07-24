const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
