import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './user';

// Root Reducer.
export default combineReducers({
  routing: routerReducer,
  users
});
