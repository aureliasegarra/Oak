import { TOGGLE_ADD_LIST_MODAL, ON_ADD_LIST_INPUT_VALUE_CHANGE } from 'src/actions/userProfile';

const initialState = {
  openModal: false,
  addListInputValue: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_ADD_LIST_MODAL:
      return {
        ...state,
        openModal: !state.openModal,
      };
    case ON_ADD_LIST_INPUT_VALUE_CHANGE:
      return {
        ...state,
        addListInputValue: action.addListInputValue,
      };
    default:
      return state;
  }
};
