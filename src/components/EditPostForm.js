import React from "react";

export default function EditPostForm(props) {
  const { post, onEditPost } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      id: post.id,
      author: event.target.author.value,
      text: event.target.text.value,
      subReddit: event.target.subReddit.value,
      subRedditImage: event.target.subRedditImage.value,
      upVotes: event.target.upVotes.value,
      imageUrl: event.target.imageUrl.value,
    });
  }

  return (
    <div>
      <h1> Edit Post</h1>
    </div>
  );
}
// id,
//   author,
//   text,
//   title,
//   subReddit,
//   subRedditImage,
//   upVotes,
//   timeCreated,
//   imageUrl,
