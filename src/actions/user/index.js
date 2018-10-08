import { login } from '../../mockApi/user/controller';
import { replace } from 'react-router-redux';
import { openNotificationWithIcon } from '../../utils/notification';

// action types.
export const actions = {
  SET_USER_INFO: "SET_USER_INFO"
};

// set's the user to redux.
export const setUser = (data) => ({
  type: actions.SET_USER_INFO,
  data
})


// performs user authentication.
export const userLogin = (data, resolve, reject) => {
  return (dispatch) => {
    return login(data.email, data.password)
      .then((data) => {
        dispatch(setUser);
        localStorage.setItem('user', data);
        dispatch(replace('/dashboard'));
        resolve();
      }).catch((error) => {
        openNotificationWithIcon('error', 'Error!', error);
        reject();
      });
  };
};