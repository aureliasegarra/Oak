// action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const SAVE_USER = 'SAVE_USER';

// action creator
export const changeInputValue = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});

export const register = () => ({
  type: REGISTER,
});

export const saveUser = (userInfos) => ({
  type: SAVE_USER,
  userInfos,
});

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
  type: LOGOUT,
});
