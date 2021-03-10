import { SET_BOOK_DETAIL } from 'src/actions/search';

const initialState = {
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BOOK_DETAIL:
      return {
        ...state,
        ...action.bookDetail,
      };
    default:
      return state;
  }
};
