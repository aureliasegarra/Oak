import {
  ADD_TO_READ_LIST,
  ADD_TO_TO_READ_LIST,
  FETCH_BOOK_DETAIL,
  setBookDetail,
  FETCH_BOOK_REVIEWS,
  setBookReviews,
} from 'src/actions/search';
import axios from 'src/api/herokuAPI';
import axiosGoogle from 'src/api/googleAPI';

const bookDetails = (store) => (next) => async (action) => {
  const { user: { id } } = store.getState();
  switch (action.type) {
    case ADD_TO_READ_LIST: {
      try {
        const res = await axios.post('/book', {
          public_api_id: action.publicApiId,
          title: action.title,
          list_id: action.listId,
          user_id: id,
        });
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case ADD_TO_TO_READ_LIST: {
      try {
        const res = await axios.post('/book', {
          public_api_id: action.publicApiId,
          title: action.title,
          list_id: action.listId,
          user_id: id,
        });
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case FETCH_BOOK_DETAIL: {
      try {
        const result = await axiosGoogle.get(`${action.bookId}`);
        store.dispatch(setBookDetail(result.data));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case FETCH_BOOK_REVIEWS: {
      try {
        const result = await axios.get('/book/1');
        store.dispatch(setBookReviews(result.data));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    default:
      next(action);
  }
};

export default bookDetails;
