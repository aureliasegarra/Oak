/* eslint-disable no-empty */

import {
  FETCH_USER_INFOS,
  setUserInfos,
  fetchUserInfos,
  FETCH_LIST_DETAILS,
  setListDetails,
  CREATE_LIST,
  DELETE_LIST,
  DELETE_BOOK,
  MODIFY_LIST_NAME,
} from 'src/actions/userProfile';

import axios from 'src/api/herokuAPI';

export default (store) => (next) => async (action) => {
  const { user: { id, token } } = store.getState();

  switch (action.type) {
    case FETCH_USER_INFOS: {
      try {
        const result = await axios.get('/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        store.dispatch(setUserInfos(result.data));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case FETCH_LIST_DETAILS: {
      try {
        const result = await axios.get(`/list/${action.listId}`);
        store.dispatch(setListDetails(result.data));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case CREATE_LIST:
      try {
        await axios.post('/list', {
          label: action.newListName,
          description: 'Description de ma liste',
          user_id: id,
        });
        store.dispatch(fetchUserInfos());
      }
      catch (error) {
        console.log(error);
      }
      break;
    case MODIFY_LIST_NAME:
      try {
        await axios.patch(`/list/${action.listId}`, {
          label: action.newListName,
          id: action.listId,
          description: 'test',
          position: 0,
        });
        store.dispatch(fetchUserInfos());
      }
      catch (error) {
        console.log(error);
      }
      break;
    case DELETE_LIST:
      try {
        await axios.delete(`/list/${action.listId}`);
        store.dispatch(fetchUserInfos());
      }
      catch (error) {
        console.log(error);
      }
      break;
    case DELETE_BOOK:
      try {
        await axios.delete(`/listHasBook/${action.bookId}`, {
          book_id: action.bookId,
          list_id: action.listId,
        });
        store.dispatch(fetchUserInfos());
      }
      catch (error) {
        console.log(error);
      }
      break;
    default:
      return next(action);
  }
};
