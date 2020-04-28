import React from "react";
import PropTypes from "prop-types";

function AddPostForm(props) {
  // { id, author, text, title, subReddit, subRedditImage } = props;

  return (
    <div>
      <h1>Add Post Form</h1>
    </div>
  );
}

AddPostForm.propTypes = {
  onSubmitAddPostForm: PropTypes,
};

export default AddPostForm;
