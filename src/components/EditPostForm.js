import React from "react";
import PropTypes from "prop-types";

export default function EditPostForm(props) {
  const { post, onEditPost } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    onEditPost({
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
      <form onSubmit={handleEditPostFormSubmission}>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          defaultValue={post.author}
          type="text"
          name="author"
        />

        <label htmlFor="subReddit">SubReddit</label>
        <input
          id="subReddit"
          defaultValue={post.subReddit}
          type="text"
          name="subReddit"
        />

        <label htmlFor="subRedditImage">Sub Reddit Image</label>
        <input
          id="subRedditImage"
          defaultValue={post.subRedditImage}
          type="text"
          name="subRedditImage"
        />

        <label htmlFor="upVotes">Up Votes</label>
        <input
          id="upVotes"
          defaultValue={post.upVotes}
          type="text"
          name="upVotes"
        />

        <label htmlFor="imageUrl">Image Url</label>
        <input
          id="imageUrl"
          defaultValue={post.imageUrl}
          type="text"
          name="imageUrl"
        />

        <label htmlFor="text">Text</label>
        <input id="text" defaultValue={post.text} type="text" name="text" />

        <button type="submit">Edit Post</button>
      </form>
    </div>
  );
}

EditPostForm.propTypes = {
  post: PropTypes.object,
  onEditPost: PropTypes.func,
};
// id,
//   author,
//   text,
//   title,
//   subReddit,
//   subRedditImage,
//   upVotes,
//   timeCreated,
//   imageUrl,
