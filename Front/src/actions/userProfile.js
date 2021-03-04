export const FETCH_USER_INFOS = 'FETCH_USER_INFOS';

export const fetchUserInfos = () => ({
  type: FETCH_USER_INFOS,
});

export const SET_USER_INFOS = 'SET_USER_INFOS';

export const setUserInfos = (user) => ({
  type: SET_USER_INFOS,
  user,
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
