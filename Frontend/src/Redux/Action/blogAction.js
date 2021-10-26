import axios from "axios";
import swal from "sweetalert";
export const getAllBlogAction = () => async (dispatch) => {
  dispatch({ type: "GET_BLOG_REQUEST" });
  try {
    const res = await axios.get("/getblogs");

    dispatch({ type: "GET_BLOG_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_BLOG_FAIL", payload: error });
  }
};

export const addBlog = (blogging) => async (dispatch) => {
  dispatch({ type: "ADD_BLOG_REQUEST" });
  try {
    const res = await axios.post("/addblog", { blogging });
    dispatch({ type: "ADD_BLOG_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "ADD_BLOG_FAIL", payload: error });
  }
};
export const deleteBlog = (blogId) => async (dispatch) => {
  try {
    await axios.post("/deleteblog/:id", { blogId });
    swal("Blog Deleted Succss!", "success");
  } catch (error) {
    swal("Error While Deleteing Pizza");
  }
};
