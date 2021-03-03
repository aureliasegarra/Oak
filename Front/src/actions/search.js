// Action Type
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const GET_RESULTS = 'GET_RESULTS';

// Action creator
export const setInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  value,
});

export const getResults = () => ({
  type: GET_RESULTS,
});
