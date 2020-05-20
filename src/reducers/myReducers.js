import { USER_DATA_SIGNUP, GET_MY_PROFILE, GET_ERRORS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_SIGNUP:
      return { ...state, userData: action.payload };
    case GET_MY_PROFILE:
      return { ...state, myProfile: action.payload };
    case GET_ERRORS:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
