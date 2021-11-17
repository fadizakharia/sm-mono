let initialState = {
  id: "",
  first_name: "",
  last_name: "",
  email: "",
  friends: null,
} as user;
export const userReducer = (state = initialState, action: userActions) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };

    case "CLEAR_USER":
      return {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        friends: null,
      };

    default:
      return state;
  }
};
