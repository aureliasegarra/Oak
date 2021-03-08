/* eslint-disable no-empty */

import {
  FETCH_USER_INFOS,
  setUserInfos,
  fetchUserInfos,
  CREATE_LIST,
  DELETE_LIST,
  DELETE_BOOK,
} from 'src/actions/userProfile';

import axios from 'src/api/herokuAPI';
import { MODIFY_LIST_NAME } from '../actions/userProfile';

export default (store) => (next) => async (action) => {
  const { user: { id } } = store.getState();

  switch (action.type) {
    case FETCH_USER_INFOS: {
      try {
        const result = await axios.get(`/user/${id}`);
        store.dispatch(setUserInfos(result.data));
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
        await axios.put(`/list/${action.listId}`, {
          label: action.newListName,
          id: action.listId,
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
        await axios.delete(`/book/${action.bookId}`);
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
