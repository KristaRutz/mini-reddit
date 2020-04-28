import React from "react";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
  }

  setVisibleComponent = () => {};

  render() {
    let currentlyVisibleState = setVisibleComponent();
    return <></>;
  }
}
const mapStateToProps = (state) => {
  return {
    masterPostList: state.masterPostList,
    newPostFormVisibleOnPage: state.newPostFormVisibleOnPage,
  };
};

export default PostControl;
