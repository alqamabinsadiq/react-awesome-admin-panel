import { login, getUsers } from '../../mockApi/user/controller';
import { replace } from 'react-router-redux';
import { openNotificationWithIcon } from '../../utils/notification';

// action types.
export const actions = {
  SET_USER_INFO: "SET_USER_INFO",
  SET_ALL_USERS: "SET_ALL_USERS",
};

// set's the user to redux.
export const setUser = (data) => ({
  type: actions.SET_USER_INFO,
  data
});

// set's all the users to redux.
export const setAllUsers = (data) => ({
  type: actions.SET_USER_INFO,
  data
})

// performs user authentication.
export const userLogin = (data, resolve, reject) => {
  return (dispatch) => {
    return login(data.email, data.password)
      .then((data) => {
        dispatch(setUser(data));
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(replace('/dashboard'));
        resolve();
      }).catch((error) => {
        openNotificationWithIcon('error', 'Error!', error);
        reject();
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('user');
    dispatch(setUser(null));
    setTimeout(() => {
      window.location = '/';
    }, 500);
  }
}

// Fetch users from db.
export const getAllUsers = (resolve, reject) => {
  return ((dispatch) => {
    return getUsers().
      then((data) => {
        dispatch(setAllUsers(data));
        resolve();
      }).
      catch(() => {
        openNotificationWithIcon('error', 'Error!', 'Something went wrong.');
        reject();
      })
  })
}