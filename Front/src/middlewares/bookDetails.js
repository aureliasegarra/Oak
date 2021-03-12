import {
  ADD_TO_READ_LIST,
  ADD_TO_TO_READ_LIST,
  FETCH_BOOK_DETAIL,
  setBookDetail,
  FETCH_BOOK_REVIEWS,
  setBookReviews,
  fetchBookReviews,
} from 'src/actions/search';
import {
  SEND_COMMENT,
} from 'src/actions/bookDetail';
import axios from 'src/api/herokuAPI';
import axiosGoogle from 'src/api/googleAPI';

const bookDetails = (store) => (next) => async (action) => {
  const { user: { id } } = store.getState();
  switch (action.type) {
    case ADD_TO_READ_LIST: {
      try {
        const res = await axios.post('/listHasBook', {
          public_api_id: action.publicApiId,
          title: action.title,
          list_id: action.listId,
        });
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case ADD_TO_TO_READ_LIST: {
      try {
        const res = await axios.post('/listHasBook', {
          public_api_id: action.publicApiId,
          title: action.title,
          list_id: action.listId,
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
        const result = await axios.get(`/book/${action.bookId}`);
        store.dispatch(setBookReviews(result.data));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case SEND_COMMENT: {
      try {
        const res = await axios.post('/review', {
          label: action.labelComment,
          book_id: action.bookAPIId,
          user_id: id,
        });
        console.log(res.data);
        store.dispatch(fetchBookReviews(action.bookGoogleId));
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
