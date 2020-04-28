import React from "react";
import PropTypes from "prop-types";
import PostCard from "./PostCard";

function PostList(props) {
  const { onIncrementUpVote } = props;
  // const { post } = props;
  //const { id, author, text, title, subReddit, subRedditImage } = props;

  return (
    <React.Fragment>
      <h1>(PostList showing) dev test</h1>
      {Object.values(props.masterPostList).map((post) => {
        return (
          <PostCard
            onIncrementUpVote={onIncrementUpVote}
            key={post.id}
            post={post}
            onSelectPost={props.onSelectPost}
          />
        );
      })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  masterPostList: PropTypes.object,
  onSelectPost: PropTypes.func,
  onIncrementUpVote: PropTypes.func,
};

export default PostList;
