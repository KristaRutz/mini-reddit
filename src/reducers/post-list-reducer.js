// [id2]: {
//   author: "Rowling J.K.",
//   title: "ThIs Is A tItLe",
//   text: "eXaMpLe StRiNg",
//   imageUrl: "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
//   subreddit: "memes",
//   subRedditImage:
//     "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
//   upVotes: 167,
//   timeCreated: new Date(),
//   id: id2,
// },

export function postListReducer(state = {}, action) {
  const {
    id,
    author,
    text,
    title,
    subReddit,
    subRedditImage,
    upVotes,
    timeCreated,
    imageUrl,
  } = action;
  let newState = null;
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        [id]: {
          id: id,
          title: title,
          author: author,
          subReddit: subReddit,
          text: text,
          upVotes: upVotes,
          timeCreated: timeCreated,
        },
      };
    case "EDIT_POST":
      const newStateUpdate = {
        ...state,
        [id]: {
          ...state[id],
          title: title,
          author: author,
          subReddit: subReddit,
          text: text,
          upVotes: upVotes,
          timeCreated: timeCreated,
          imageUrl: imageUrl,
        },
      };
    default:
      return state;
  }
}
