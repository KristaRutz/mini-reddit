import React from "react";
import PropTypes from "prop-types";

function PostCard(props) {
  const { post, onSelectPost, onIncrementUpVote, onDecrementUpVote } = props;

  const postCardStyle = {
    background: "#efefef",
    margin: 20,
    width: 600,
  };
  const imageStyle = {
    maxWidth: 30,
  };

  return (
    <div style={postCardStyle}>
      <img style={imageStyle} src={post.subRedditImage} />
      <h4>{post.subReddit}</h4>
      <div onClick={() => onSelectPost(post.id)}>
        <h3>{post.title}</h3>
      </div>
      <h5>
        <span>{post.author}</span> <span>{post.timeCreated.toISOString()}</span>
      </h5>
      <p>{post.text}</p>
      <div>
        <button onClick={() => onIncrementUpVote(post.id)}>+</button>
        <span>{post.upVotes}</span>
        <button onClick={() => onDecrementUpVote(post.id)}>-</button>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.object,
  onSelectPost: PropTypes.func,
  onIncrementUpVote: PropTypes.func,
  onDecrementUpVote: PropTypes.func,
};
export default PostCard;
