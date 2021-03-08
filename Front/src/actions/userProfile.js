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

export const SET_NEW_LIST_NAME = 'SET_NEW_LIST_NAME';

export const setNewListName = (addListInputValue) => ({
  type: SET_NEW_LIST_NAME,
  addListInputValue,
});

export const CREATE_LIST = 'CREATE_LIST';

export const createList = () => ({
  type: CREATE_LIST,
});

export const MODIFY_LIST_NAME = 'MODIFY_LIST_NAME';

export const modifyListName = (newListName, listId) => ({
  type: MODIFY_LIST_NAME,
  newListName,
  listId,
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
