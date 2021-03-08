// action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const LOGIN = 'LOGIN';

// action creator
export const changeInputValue = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});
