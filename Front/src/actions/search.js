// Action Type
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SEARCH_QUERY = 'SEARCH_QUERY';
export const FETCH_DATA = 'FETCH_DATA';
export const SAVE_DATA = 'SAVE_DATA';

// Action creator
export const setInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  value,
});

export const searchQuery = (value) => ({
  type: SEARCH_QUERY,
  value,
});

export const fetchData = () => ({
  type: FETCH_DATA,
});

export const saveData = (results) => ({
  type: SAVE_DATA,
  results,
});
