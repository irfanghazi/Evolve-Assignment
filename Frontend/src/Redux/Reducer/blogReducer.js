export const getAllBlogReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case "GET_BLOG_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_BLOG_SUCCESS":
      return {
        loading: false,
        success: true,
        blogs: action.payload,
      };
    case "GET_BLOG_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const getAddBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_BLOG_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_BLOG_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_BLOG_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
