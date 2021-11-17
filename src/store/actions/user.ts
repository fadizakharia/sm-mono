export const setUser = (user: user) => {
  return {
    type: "SET_USER",
    payload: user,
  } as userActions;
};
export const clearUser = () => {
  return {
    type: "CLEAR_USER",
    payload: {},
  } as userActions;
};
