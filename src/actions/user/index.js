// import api from '../../shared/api';
import { replace } from 'react-router-redux';

export const goHome = () => {
  return (dispatch) => {
    if (localStorage.getItem('token')) {
      dispatch(replace('/dashboard'));
    } else {
      dispatch(replace('/'));
    }
  };
};

export const login = (data, resolve) => {
  return (dispatch) => {
    // Here you can perform api call and then call the actions accordingly.
    /* 
    axios.post(`${api.url}user/login`, data)
      .then(({ data, status }) => {
        dispatch(setUserData);
      })
      .catch((error) => {
        reject();
      }); 
     */
  };
};