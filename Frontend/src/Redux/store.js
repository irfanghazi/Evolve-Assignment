import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllBlogReducer } from "./Reducer/blogReducer";
import { getAddBlogReducer } from "./Reducer/blogReducer";

const rootReducer = combineReducers({
  getAllBlogReducer: getAllBlogReducer,
  getAddBlogReducer: getAddBlogReducer,
});

const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
