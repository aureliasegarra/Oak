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

export default (store) => (next) => async (action) => {
  const { user: { id }, userProfile: { addListInputValue } } = store.getState();

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
          label: addListInputValue,
          description: 'Description de ma liste',
          user_id: id,
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
