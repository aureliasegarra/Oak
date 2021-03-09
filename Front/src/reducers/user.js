import { SAVE_USER } from 'src/actions';

const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER: {
      return {
        ...state,
        ...action.userInfos,
      };
    }
    default:
      return state;
  }
};
