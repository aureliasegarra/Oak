/* eslint-disable no-empty */

import {
  FETCH_USER_INFOS,
  setUserInfos,
} from 'src/actions/userProfile';

import axios from 'src/api';
import { CREATE_LIST } from '../actions/userProfile';

export default (store) => (next) => (action) => {
  const { user: { id }, userProfile: { addListInputValue } } = store.getState();

  switch (action.type) {
    case FETCH_USER_INFOS:
      axios.get('/user/1')
        .then((result) => {
          console.log(result.data);
          store.dispatch(setUserInfos(result.data));
        });
      return next(action);
    case CREATE_LIST:
      axios.post('/list', {
        label: addListInputValue,
        description: 'test',
        user_id: id,
      })
        .then((result) => {
          console.log(result.data);
        });
      return next(action);
    default:
      return next(action);
  }
};
