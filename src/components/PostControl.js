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
  };

  handleAddPost = (newPost) => {
    const { dispatch } = this.props;
    const action = {
      type: "ADD_POST",
      payload: newPost,
    };
    dispatch(action);

    //make sure to dispatch to reducer for addpostform visibility
  };

  handleEditPost = (editPost) => {
    const { dispatch } = this.props;
    const action = {
      type: "EDIT_POST",
      payload: editPost,
    };
    dispatch(action);

    // make sure to dispact another action to set editing state to false
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
