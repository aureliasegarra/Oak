import { combineReducers } from 'redux';

import user from './user';
import userProfile from './userProfile';

export default combineReducers({
  user,
  userProfile,
});
