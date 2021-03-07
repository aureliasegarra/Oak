import { TOGGLE_ADD_LIST_MODAL, SET_NEW_LIST_NAME } from 'src/actions/userProfile';

const initialState = {
  isModalOpen: false,
  addListInputValue: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_ADD_LIST_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case SET_NEW_LIST_NAME:
      return {
        ...state,
        addListInputValue: action.addListInputValue,
      };
    default:
      return state;
  }
};
