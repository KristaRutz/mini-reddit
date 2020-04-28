import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { post, onEditClick, onDeleteClick } = props;
  const {
    id,
    author,
    text,
    title,
    subReddit,
    subRedditImage,
    upVotes,
  } = props.post;

  return (
    <div>
      <h1>Details</h1>
      <h4>{id}</h4>
      <h4>{author}</h4>
      <h4>{text}</h4>
      <h4>{title}</h4>
      <h4>{upVotes}</h4>
      <h4>{subReddit}</h4>
      <h4>{subRedditImage}</h4>

      <div>
        <button onClick={() => onEditClick()}>Edit post</button>
        <button onClick={() => onDeleteClick(post.id)}>Delete post</button>
      </div>
    </div>
  );
}

PostDetail.propTypes = {
  // id: PropTypes.string,
  // author: PropTypes.string,
  // title: PropTypes.string,
  // text: PropTypes.string,
  // subReddit: PropTypes.string,
  // subRedditImage: PropTypes.string,
  // upVotes: PropTypes.number,
  post: PropTypes.object,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default PostDetail;
// id,
// author,
// text,
// title,
// subReddit,
// subRedditImage,
// upVotes,
// timeCreated,
// imageUrl,
