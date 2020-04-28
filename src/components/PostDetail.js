import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { id, author, text, title, subReddit, subRedditImage, upVotes } = props;

  return (
    <React.Fragement>
      <h4>{id}</h4>
      <h4>{author}</h4>
      <h4>{text}</h4>
      <h4>{title}</h4>
      <h4>{upVotes}</h4>
      <h4>{subReddit}</h4>
      <h4>{subRedditImage}</h4>
    </React.Fragement>
  );
}

PostDetail.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  subReddit: PropTypes.string,
  subRedditImage: PropTypes.string,
  upVotes: PropTypes.number,
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
