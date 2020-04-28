import React from "react";
import v4 from "uuid";
import PropTypes from "prop-types";

function AddPostForm(props) {
  const { onAddPost, onCancel } = props;

  function handleAddPostFormSubmission(event) {
    event.preventDefault();
    onAddPost({
      id: v4(),
      title: event.target.title.value,
      author: event.target.author.value,
      text: event.target.text.value,
      subReddit: event.target.subReddit.value,
      subRedditImage: event.target.subRedditImage.value,
      timeCreated: new Date(),
      upVotes: 0,
      imageUrl: event.target.imageUrl.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleAddPostFormSubmission}>
        <label htmlFor="author">Author</label>
        <input id="author" type="text" name="author" />

        <label htmlFor="subReddit">SubReddit</label>
        <input id="subReddit" type="text" name="subReddit" />

        <label htmlFor="subRedditImage">Sub Reddit Image</label>
        <input id="subRedditImage" type="text" name="subRedditImage" />

        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required />

        <label htmlFor="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" name="imageUrl" />

        <label htmlFor="text">Text</label>
        <input id="text" type="text" name="text" />

        <button type="submit">Submit Post</button>
      </form>
      <h1>Add Post Form</h1>
    </div>
  );
}

AddPostForm.propTypes = {
  onSubmitAddPostForm: PropTypes.func,
};

export default AddPostForm;
