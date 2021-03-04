/* eslint-disable no-empty */

import {
  FETCH_USER_INFOS,
  setUserInfos,
} from 'src/actions/userProfile';

import axios from 'src/api';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_INFOS:
      axios.get('/user/1')
        .then((result) => {
          console.log(result.data);
          store.dispatch(setUserInfos(result.data));
        });
      return next(action);
    default:
      return next(action);
  }
};
