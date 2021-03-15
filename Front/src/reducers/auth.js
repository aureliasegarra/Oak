import { CHANGE_INPUT_VALUE, SAVE_USER } from 'src/actions';

const initialState = {
  register_email: '',
  word: '',
  login_email: '',
  login_password: '',
  register_username: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    default:
      return state;
  }
};
