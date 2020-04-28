import React from "react";

function PostDetail(props) {
  const { id, author, text, title, subReddit, subRedditImage } = props;

  return;
  <div>
    <h4>{id}</h4>
    <h4>{author}</h4>
    <h4>{text}</h4>
    <h4>{subReddit}</h4>
    <h4>{subRedditImage}</h4>
  </div>;
}

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
