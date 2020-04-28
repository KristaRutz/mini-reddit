export function selectedPostReducer(state = {}, action) {
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
    case "GET_POST":
      return;
  }
}
