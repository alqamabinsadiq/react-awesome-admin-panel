import { actions } from '../../actions/user';

const INITIAL_STATE = {
    token: ''
};

const setUserToken = (state, data) => {
  return {
    ...state,
    token: data
  };
};

export default function reducer(state = INITIAL_STATE, { data, type }) {
  switch (type) {
  case actions.SET_USER_TOKEN: {
    return setUserToken(state, data);
  }
  default:
    return state;
  }
}
