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
  SEND_RATING,
  saveBookId,
} from 'src/actions/bookDetail';
import axios from 'src/api/herokuAPI';
import axiosGoogle from 'src/api/googleAPI';
import { saveBookToDB, SAVE_BOOK_TO_DB } from '../actions/bookDetail';

const bookDetails = (store) => (next) => async (action) => {
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
        store.dispatch(saveBookToDB(result.data.id, result.data.volumeInfo.title));
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
        });
        console.log(res.data);
        store.dispatch(fetchBookReviews(action.bookGoogleId));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case SEND_RATING: {
      try {
        console.log(action);
        const res = await axios.post('/rating', {
          rating: action.rating,
          book_id: action.bookAPIId,
        });
        console.log(res.data);
        store.dispatch(fetchBookReviews(action.bookGoogleId));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case SAVE_BOOK_TO_DB: {
      try {
        const res = await axios.post('/book', {
          title: action.bookTitle,
          public_api_id: action.bookGoogleId,
        });
        store.dispatch(saveBookId(res.data.id));
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
