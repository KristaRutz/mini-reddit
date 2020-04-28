import React from "react";
import PropTypes from "prop-types";
import PostCard from "./PostCard";

function PostList(props) {
  const { onIncrementUpVote, onDecrementUpVote } = props;
  // const { post } = props;
  //const { id, author, text, title, subReddit, subRedditImage } = props;

  //   (4) [{…}, {…}, {…}, {…}]
  //     [ {0: {author: "JK Rowling", title: "example string title", text: "example string text", imageUrl: "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg", subreddit: "worldnews", …}},
  //     1: {author: "Rowling J.K.", title: "ThIs Is A tItLe", text: "eXaMpLe StRiNg", imageUrl: "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg", subreddit: "memes", …}
  //     2: {author: "JK Rowling", title: "ThIs Is A dIfFeReNt TiTlE", text: "eXaMpLe StRiNg", imageUrl: "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg", subreddit: "memes", …}
  //     3: {author: "Anonymous", title: "AITA? tldr; I ate my roommate's takeout without asking", text: "but...", imageUrl: "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg", subreddit: "AITA", …}
  //     length: 4
  // __proto__: Array(0)

  //     array = []
  //     array[0] = { 0 : { } }
  //     array[0]["upvotes"] = [{ 0: { upvotes: x }}
  // ]
  function trendingList(objectArray) {
    let array = [];
    array = objectArray.sort(objectArray[0]["upVotes"]);
    return array;
  }

  return (
    <React.Fragment>
      <h1>(PostList showing) dev test</h1>

      {/* {Object.values(props.masterPostList).sort(x => x.upVotes).map => } */}
      {/* {console.log(Object.values(props.masterPostList))} */}
      {Object.values(props.masterPostList).map((post) => {
        return (
          <PostCard
            onIncrementUpVote={onIncrementUpVote}
            onDecrementUpVote={onDecrementUpVote}
            key={post.id}
            post={post}
            onSelectPost={props.onSelectPost}
          />
        );
      })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  masterPostList: PropTypes.object,
  onSelectPost: PropTypes.func,
  onIncrementUpVote: PropTypes.func,
  onDecrementUpVote: PropTypes.func,
};

export default PostList;
