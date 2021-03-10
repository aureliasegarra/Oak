import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import lists from './lists';
import search from './search';

export default combineReducers({
  auth,
  user,
  search,
  lists,
});
