export const FETCH_USER_INFOS = 'FETCH_USER_INFOS';

export const fetchUserInfos = () => ({
  type: FETCH_USER_INFOS,
});

export const SET_USER_INFOS = 'SET_USER_INFOS';

export const setUserInfos = (userInfos) => ({
  type: SET_USER_INFOS,
  userInfos,
});

export const TOGGLE_ADD_LIST_MODAL = 'TOGGLE_ADD_LIST_MODAL';

export const toggleAddListModal = () => ({
  type: TOGGLE_ADD_LIST_MODAL,
});

export const ON_ADD_LIST_INPUT_VALUE_CHANGE = 'ON_ADD_LIST_INPUT_VALUE_CHANGE';

export const onAddListInputValueChange = (addListInputValue) => ({
  type: ON_ADD_LIST_INPUT_VALUE_CHANGE,
  addListInputValue,
});

export const CREATE_LIST = 'CREATE_LIST';

export const createList = () => ({
  type: CREATE_LIST,
});

export const DELETE_LIST = 'DELETE_LIST';

export const deleteList = (listId) => ({
  type: DELETE_LIST,
  listId,
});

export const DELETE_BOOK = 'DELETE_BOOK';

export const deleteBook = (bookId) => ({
  type: DELETE_BOOK,
  bookId,
});
