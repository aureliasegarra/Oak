import { SET_BOOK_DETAIL, SET_BOOK_REVIEWS } from 'src/actions/search';

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
        reviews: action.bookReviews.reviews,
        rating: action.bookReviews.average_rating,
      };
    default:
      return state;
  }
};
