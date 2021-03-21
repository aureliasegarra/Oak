import { SET_USER_INFOS } from 'src/actions/userProfile';
import { SAVE_USER, LOGOUT, SUBSCRIBED } from 'src/actions/auth';

const initialState = {
  isLogged: false,
  subscribed: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_INFOS:
      return {
        ...state,
        lists: action.userInfos.lists,
      };
    case SAVE_USER:
      return {
        ...state,
        ...action.userInfos,
        isLogged: true,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    case SUBSCRIBED:
      return {
        ...state,
        subscribed: true,
      };
    default:
      return state;
  }
};
