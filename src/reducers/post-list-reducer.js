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
  // const {
  //   id,
  //   author,
  //   text,
  //   title,
  //   subReddit,
  //   subRedditImage,
  //   upVotes,
  //   timeCreated,
  //   imageUrl,
  // } = action;
  const { payload } = action;
  let newState = null;
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        [payload.id]: payload,
      };
    case "EDIT_POST":
      const newStateUpdate = {
        ...state,
        [payload.id]: payload,
      };
    case "DELETE_POST":
      newState = { ...state };
      delete newState[payload.id];
      return newState;
    default:
      return state;
  }
}
