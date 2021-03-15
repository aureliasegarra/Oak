import { TOGGLE_BURGER_MENU } from 'src/actions/menu';

const initialState = {
  open: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BURGER_MENU:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
