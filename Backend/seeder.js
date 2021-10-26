const mongoose = require("mongoose");
require("./connection/config");
require("colors");
const BlogModel = require("./model/blogModel");
const blogData = require("./blogData.json");

//import data

const importData = async () => {
  try {
    await BlogModel.deleteMany(); // deleting any existing data
    const sampleData = blogData.map((blog) => {
      return { ...blog };
    });
    await BlogModel.insertMany(sampleData); // inserting sample data into pizza model
    console.log("Data Imported".bgMagenta.black);
    // process.exit(); // exit with success
  } catch (error) {
    console.log(`${error}`.bgRed.white);
    // process.exit(1); // exit withn failure
  }
};

module.exports = importData;
