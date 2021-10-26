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
  console.log(blogging);

  try {
    const addBlog = new BlogModel({
      title: blogging.title,
      order: blogging.order,
      status: blogging.status,
    });
    await addBlog.save();
    res.send("New Blog added", addBlog);
  } catch (error) {
    res.send(error);
  }
});

router.post("/deleteBlog/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const { blogId } = req.body;
    await BlogModel.findOneAndDelete({ _id: blogId });
    res.send("Blog deleted");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
