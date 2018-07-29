import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as notifications } from 'react-notification-system-redux';

// Root Reducer.
export default combineReducers({
  notifications,
  routing: routerReducer,
});
