import { USER_DATA_SIGNUP } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_SIGNUP:
      return { state, userData: action.payload };
    default:
      return state;
  }
};
