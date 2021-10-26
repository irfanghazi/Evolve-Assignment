const express = require("express");
const cors = require("cors");
const BlogModel = require("../model/blogModel");
const router = express.Router();

router.get("/getblogs", cors(), async (req, res) => {
  try {
    const response = await BlogModel.find();

    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

router.post("/addblog", cors(), async (req, res) => {
  const { blogging } = req.body;

  try {
    const addBlog = new BlogModel({
      title: blogging.title,
      order: blogging.order,
      status: blogging.status,
    });
    await addBlog.save();
    res.status(200).json({ success: true, message: "Added successfully" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/deleteBlog/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const { blogId } = req.body;
    await BlogModel.findOneAndDelete({ _id: blogId });
    res.status(200).json({ success: true, message: "Blog deleted" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
