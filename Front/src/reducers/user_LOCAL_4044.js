import { SET_USER_INFOS } from 'src/actions/userProfile';
import { SAVE_USER } from 'src/actions';

const initialState = {
  isLogged: false,
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
    default:
      return state;
  }
};
