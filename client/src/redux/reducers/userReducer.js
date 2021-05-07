import { Type } from "../actions/userActions";

const INITIAL_STATE = {
  currentUser: {},
  isSignedIn: false
};

export default function userReducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Type.SIGN_IN:
      return { ...state, currentUser: payload, isLoggedIn: true };
    case Type.SIGN_OUT:
      return { ...state, currentUser: {}, isLoggedIn: false };
    default:
      return state;
  }
};