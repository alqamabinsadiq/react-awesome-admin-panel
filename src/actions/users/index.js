// import api from '../../shared/api';
import { replace } from 'react-router-redux';
// import { closeModal } from '../../actions/modal/index';
// import axios from 'axios';
import Mock from 'mockjs';
import Notifications from 'react-notification-system-redux';


export const actions = {
  SET_USER_TOKEN: 'SET_USER_TOKEN'
};

export const route = (location) => {
  return (dispatch) => {
    dispatch(replace(location));
  };
};

export const goHome = () => {
  return (dispatch) => {
    if (sessionStorage.getItem('token')) {
      dispatch(replace('/dashboard'));
    } else {
      dispatch(replace('/landing'));
    }
  };
};

export const setUserToken = (userToken) => ({
  type: actions.SET_USER_TOKEN,
  data: userToken
});

export const login = ({ username, password }, resolve, reject) => {
  return (dispatch) => {
    if (username === 'awesome' && password === 'awesome') {
      sessionStorage.setItem('userId', 1);
      sessionStorage.setItem('token', 'user.token');
      window.location = '/dashboard';
      resolve();
    } else {
      const notificationOpts = {
        title: 'Oops! Something went wrong.',
        message: 'Authentication Failed',
        position: 'tr',
        autoDismiss: 5
      };
      dispatch(Notifications.error(notificationOpts));
      reject();
    }
  };
};

export const getUserList = () => {
  return () => {
    let data = Mock.mock({
      "array|10": [
        {
          "object|5": {
            "firstName": Mock.Random.first(),
            "lastname": Mock.Random.last(),
            "country": Mock.Random.county(),
            "city": Mock.Random.city(),
            "email": Mock.Random.email()
          }
        }
      ]
    });
    return data;
  };
};


export const logout = () => {
  return (dispatch) => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    dispatch(setUserToken(null));
    // Forcing reload to refresh navbar
    window.location = '/landing';
  };
};