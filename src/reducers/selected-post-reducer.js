export default (state = null, action) => {
  switch (action.type) {
    // case "GET_POST":
    //   return action.payload;
    case "SET_POST": {
      return action.payload;
    }
    default:
      return null;
  }
};
