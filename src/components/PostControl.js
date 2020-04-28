import React from "react";
import AddPostForm from "./AddPostForm";
import EditPostForm from "./EditPostForm";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePostList = () => {
    const { dispatch } = this.props;
  };

  handleCancelEdit = () => {
    // set state of editing to false
  };

  handleCancelAddPost = () => {
    // set state of adding new post to false
  };

  handleShowNewPostForm = () => {
    // set state of new post form visible to true
  };

  handleDeselectPost = () => {
    // deselect currently selected post
    const { dispatch } = this.props;
    const post = this.props.masterPostList[id];
    const action = {
      type: "SET_POST",
      payload: null,
    };
    dispatch(action);
  };

  handleShowPostDetail = (id) => {
    const { dispatch } = this.props;
    const post = this.props.masterPostList[id];
    const action = {
      type: "SET_POST",
      payload: post,
    };
    dispatch(action);
  };

  //form submit
  handleAddPost = (newPost) => {
    //this is the function to access the store
    const { dispatch } = this.props;
    const action = {
      type: "ADD_POST",
      payload: newPost,
    };
    dispatch(action);

    //make sure to dispatch to reducer for addpostform visibility
  };

  // this is passed as a callback to the edit post form, and triggered on "submit"
  handleEditPost = (editedPost) => {
    const { dispatch } = this.props;
    const action = {
      type: "EDIT_POST",
      payload: editedPost,
    };
    dispatch(action);

    // make sure to dispact another action to set editing state to false
  };

  handleDeletePost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_POST",
      payload: id,
    };
    dispatch(action);
  };

  setVisibleComponent = () => {
    if (this.props.editPostFormVisibleOnPage) {
      return {
        component: <EditPostForm onEditPost={this.handleEditPost} />,
        buttonText: "Cancel",
        buttonFunc: this.handleCancelEdit,
      };
    } else if (this.props.selectedPost != null) {
      return {
        component: <PostDetail post={this.props.selectedPost} />,
        buttonText: "Back to feed",
        buttonFunc: this.handleDeselectPost,
      };
    } else if (this.props.newPostFormVisibleOnPage) {
      return {
        component: <AddPostForm onAddPost={this.handleAddPost} />,
        buttonText: "Cancel",
        buttonFunc: this.handleCancelAddPost,
      };
    } else {
      return {
        component: <PostList />,
        buttonText: "New Post",
        buttonFunc: this.handleShowNewPostForm,
      };
    }
  };

  render() {
    let currentlyVisibleState = setVisibleComponent();
    return (
      <>
        <button onClick={currentlyVisibleState.buttonFunc}>
          {currentlyVisibleState.buttonText}
        </button>
        {currentlyVisibleState.component};
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    masterPostList: state.masterPostList,
    newPostFormVisibleOnPage: state.newPostFormVisibleOnPage,
    editPostFormVisibleOnPage: state.editPostFormVisibleOnPage,
    selectedPost: state.selectedPost,
  };
};

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;
