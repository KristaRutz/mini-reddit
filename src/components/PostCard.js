import React from "react";
import PropTypes from "prop-types";

function PostCard(props) {
  const { post, onSelectPost } = props;
  function handleSelectPost(event) {
    onSelectPost(post.id);
  }
  return (
    <div onClick={handleSelectPost}>
      <h3>{post.Title}</h3>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.object,
  onSelectPost: PropTypes.func,
};
export default PostCard;
