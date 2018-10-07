import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Root Reducer.
export default combineReducers({
  routing: routerReducer,
});
