import addPostFormReducer from "./add-post-form-toggle-reducer";
import editPostFormReducer from "./edit-post-form-toggle-reducer";
import postListReducer from "./post-list-reducer";
import selectedPostReducer from "./selected-post-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  newPostFormVisibleOnPage: addPostFormReducer,
  editPostFormVisibleOnPage: editPostFormReducer,
  masterPostList: postListReducer,
  selectedPost: selectedPostReducer,
});

export default rootReducer;
