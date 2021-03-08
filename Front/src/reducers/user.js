import { CHANGE_INPUT_VALUE } from 'src/actions';

const initialState = {
  email: '',
  password: '',
  username: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};
