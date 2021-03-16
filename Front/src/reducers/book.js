import { SET_BOOK_DETAIL, SET_BOOK_REVIEWS } from 'src/actions/search';
import { SAVE_BOOK_ID } from '../actions/bookDetail';

const initialState = {
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BOOK_DETAIL:
      return {
        ...state,
        ...action.bookDetail,
      };
    case SET_BOOK_REVIEWS:
      return {
        ...state,
        bookId: action.bookReviews.id,
        reviews: action.bookReviews.reviews,
        rating: action.bookReviews.average_rating,
      };
    case SAVE_BOOK_ID:
      return {
        ...state,
        bookId: action.id,
      };
    default:
      return state;
  }
};
