import InitialState from "../components/InitialState";

export default (state = {}, action) => {
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
      return newStateUpdate;
    case "INCREMENT_UPVOTE":
      newState = { ...state };
      newState[payload]["upVotes"] += 1;
      return newState;
    case "DECREMENT_UPVOTE":
      newState = { ...state };
      newState[payload]["upVotes"] -= 1;
      return newState;
    case "DELETE_POST":
      newState = { ...state };
      delete newState[payload.id];
      return newState;
    default:
      return state;
  }
};
