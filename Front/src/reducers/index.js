import { combineReducers } from 'redux';

import user from './user';
import lists from './lists';
import search from './search';

export default combineReducers({
  user,
  search,
  lists,
});
