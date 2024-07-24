const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://sang612:12345@cluster0.pzt7ygm.mongodb.net/todo_app?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
module.exports = connectToMongo;
