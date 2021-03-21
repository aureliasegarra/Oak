import { CHANGE_INPUT_VALUE, SAVE_AVATAR } from 'src/actions/auth';

const initialState = {
  register_username: '',
  register_email: '',
  register_password: '',
  register_avatar: 1,
  login_email: '',
  login_password: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case SAVE_AVATAR: {
      return {
        ...state,
        register_avatar: action.id,
      };
    }
    default:
      return state;
  }
};
