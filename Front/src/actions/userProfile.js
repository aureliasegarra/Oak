export const FETCH_USER_INFOS = 'FETCH_USER_INFOS';

export const fetchUserInfos = () => ({
  type: FETCH_USER_INFOS,
});

export const SET_USER_INFOS = 'SET_USER_INFOS';

export const setUserInfos = (userInfos) => ({
  type: SET_USER_INFOS,
  userInfos,
});

export const FETCH_LIST_DETAILS = 'FETCH_LIST_DETAILS';

export const fetchListDetails = (listId) => ({
  type: FETCH_LIST_DETAILS,
  listId,
});

export const SET_LIST_DETAILS = 'SET_LIST_DETAILS';

export const setListDetails = (listDetails) => ({
  type: SET_LIST_DETAILS,
  listDetails,
});

export const CREATE_LIST = 'CREATE_LIST';

export const createList = (newListName) => ({
  type: CREATE_LIST,
  newListName,
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

export const deleteBook = (bookId, listId) => ({
  type: DELETE_BOOK,
  bookId,
  listId,
});

export const MOVE_BOOK = 'MOVE_BOOK';

export const moveBook = (bookId, listId) => ({
  type: MOVE_BOOK,
  bookId,
  listId,
});
