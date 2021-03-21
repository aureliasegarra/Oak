import { combineReducers } from 'redux';

import auth from './auth';
import list from './list';
import user from './user';
import book from './book';
import search from './search';

export default combineReducers({
  auth,
  user,
  search,
  list,
  book,
});
