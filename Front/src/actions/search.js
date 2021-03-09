// Action Type
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SEARCH_QUERY = 'SEARCH_QUERY';
export const FETCH_DATA = 'FETCH_DATA';
export const SAVE_DATA = 'SAVE_DATA';
export const IS_LOADING = 'IS_LOADING';
export const ADD_TO_READ_LIST = 'ADD_TO_READ_LIST';

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

export const isLoading = (status) => ({
  type: IS_LOADING,
  status,
});

export const addToReadList = (id, title, listId) => ({
  type: ADD_TO_READ_LIST,
  id,
  title,
  listId,
});
