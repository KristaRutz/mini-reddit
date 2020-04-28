import React from "react";
import v4 from "uuid";
import PropTypes from "prop-types";

function AddPostForm(props) {
  const { onSubmitAddPostForm } = props;

  function handleAddPostFormSubmission(event) {
    event.preventDefault();
    onSubmitAddPostForm({
      id: v4(),
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
      <form onSubmit={handleAddPostFormSubmission}>
        <label htmlFor="author">Author</label>
        <input id="author" type="text" name="author" />

        <label htmlFor="subReddit">SubReddit</label>
        <input id="subReddit" type="text" name="subReddit" />

        <label htmlFor="subRedditImage">Sub Reddit Image</label>
        <input id="subRedditImage" type="text" name="subRedditImage" />

        <label htmlFor="upVotes">Up Votes</label>
        <input id="upVotes" type="text" name="upVotes" />

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
  onSubmitAddPostForm: PropTypes,
};

export default AddPostForm;
