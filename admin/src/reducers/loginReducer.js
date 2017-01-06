import {
  AUTH_SIGN_IN_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGN_IN_SUCCESS: {
      const user = action.user;
      return {
        ...state,
        user,
      };
    }
    default:
      return state;
  }
};
