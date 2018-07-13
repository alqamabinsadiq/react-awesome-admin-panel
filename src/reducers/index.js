import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux';


const rootReducer = combineReducers({
  form,
  notifications,
  routing: routerReducer,
});

export default rootReducer;
