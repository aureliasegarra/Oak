import { combineReducers } from 'redux';

import user from './user';
import search from './search';

export default combineReducers({
  user,
  search,
});
