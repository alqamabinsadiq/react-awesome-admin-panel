// action types.
export const actions = {
  SET_USER_INFO: "SET_USER_INFO",
  SET_ALL_USERS: "SET_ALL_USERS",
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_USER_LOADER: "SET_USER_LOADER"
};

// set's the user to redux.
export const setUser = (data) => ({
  type: actions.SET_USER_INFO,
  data
});

// set's all the users to redux.
export const setAllUsers = (data) => ({
  type: actions.SET_ALL_USERS,
  data
});

// Set's user loader.
export const setUserLoader = (data) => ({
  type: actions.SET_USER_LOADER,
  data
});

// Set's current user in redux.
export const setCurrentUser = (data) => ({
  type: actions.SET_CURRENT_USER,
  data
});