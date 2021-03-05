/* eslint-disable no-empty */

import {
  FETCH_USER_INFOS,
  setUserInfos,
  fetchUserInfos,
  CREATE_LIST,
  DELETE_LIST,
} from 'src/actions/userProfile';

import axios from 'src/api';

export default (store) => (next) => (action) => {
  const { user: { id }, userProfile: { addListInputValue } } = store.getState();

  switch (action.type) {
    case FETCH_USER_INFOS:
      axios.get(`/user/${id}`)
        .then((result) => {
          store.dispatch(setUserInfos(result.data));
        });
      return next(action);
    case CREATE_LIST:
      axios.post('/list', {
        label: addListInputValue,
        description: 'Description de ma liste',
        user_id: id,
      })
        .then((result) => {
        })
        .finally(() => {
          store.dispatch(fetchUserInfos());
        });
      return next(action);
    case DELETE_LIST:
      axios.delete(`/list/${action.listId}`)
        .finally(() => {
          store.dispatch(fetchUserInfos());
        });
      return next(action);
    default:
      return next(action);
  }
};
