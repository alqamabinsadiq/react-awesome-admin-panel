import { actions } from '../../actions/user';

// Initial State
const INITIAL_STATE = {
  user: null
};

// User Reducer.
export default (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    case actions.SET_USER_INFO:
      return { ...state, user: data };
    default:
      return state;
  }
}