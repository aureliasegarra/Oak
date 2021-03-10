import { SAVE_USER } from 'src/actions';

const initialState = {
  isLogged: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER: {
      return {
        ...state,
        ...action.userInfos,
        isLogged: true,
      };
    }
    default:
      return state;
  }
};
