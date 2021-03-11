// Action Type
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SEARCH_QUERY = 'SEARCH_QUERY';
export const FETCH_DATA = 'FETCH_DATA';
export const SAVE_DATA = 'SAVE_DATA';
export const IS_LOADING = 'IS_LOADING';
export const ADD_TO_READ_LIST = 'ADD_TO_READ_LIST';
export const ADD_TO_TO_READ_LIST = 'ADD_TO_TO_READ_LIST';
export const FETCH_BOOK_DETAIL = 'FETCH_BOOK_DETAIL';
export const SET_BOOK_DETAIL = 'SET_BOOK_DETAIL';
export const FETCH_BOOK_REVIEWS = 'FETCH_BOOK_REVIEWS';
export const SET_BOOK_REVIEWS = 'SET_BOOK_REVIEWS';

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

export const addToReadList = (publicApiId, title, listId) => ({
  type: ADD_TO_READ_LIST,
  publicApiId,
  title,
  listId,
});

export const addToToReadList = (publicApiId, title, listId) => ({
  type: ADD_TO_TO_READ_LIST,
  publicApiId,
  title,
  listId,
});

export const fetchBookDetail = (bookId) => ({
  type: FETCH_BOOK_DETAIL,
  bookId,
});

export const setBookDetail = (bookDetail) => ({
  type: SET_BOOK_DETAIL,
  bookDetail,
});

export const fetchBookReviews = (bookId) => ({
  type: FETCH_BOOK_REVIEWS,
  bookId,
});

export const setBookReviews = (bookReviews) => ({
  type: SET_BOOK_REVIEWS,
  bookReviews,
});
