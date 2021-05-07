const prefix = 'user_';

export const Type = {
  SIGN_IN: `${prefix}signin`,
  SIGN_OUT: `${prefix}signout`,
};

export function signIn(user) {
  return {type: Type.SIGN_IN, payload: user};
}

export function signOut() {
  return {type: Type.SIGN_OUT};
}