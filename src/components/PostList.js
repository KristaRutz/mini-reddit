import React from "react";
import PropTypes from "prop-types";
import PostCard from "./PostCard";

function PostList(props) {
  // const { post } = props;
  //const { id, author, text, title, subReddit, subRedditImage } = props;

  return (
    <React.Fragment>
      <h1>dev test</h1>
      {Object.values(props.masterPostList).map((post) => {
        return <PostCard post={post} onSelectPost={props.onSelectPost} />;
      })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  masterPostList: PropTypes.object,
  onSelectPost: PropTypes.func,
};

export default PostList;
