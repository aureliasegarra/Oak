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
  saveBookToDB,
  SAVE_BOOK_TO_DB,
} from 'src/actions/bookDetail';
import axios from 'src/api/herokuAPI';
import axiosGoogle from 'src/api/googleAPI';

const bookDetails = (store) => (next) => async (action) => {
  switch (action.type) {
    case ADD_TO_READ_LIST: {
      try {
        await axios.post('/listHasBook', {
          public_api_id: action.publicApiId,
          title: action.title,
          list_id: action.listId,
        });
      }
      catch (error) {
        console.error(error);
      }
      break;
    }
    case ADD_TO_TO_READ_LIST: {
      try {
        await axios.post('/listHasBook', {
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
        await axios.post('/review', {
          label: action.labelComment,
          book_id: action.bookAPIId,
        });
        store.dispatch(fetchBookReviews(action.bookGoogleId));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case SEND_RATING: {
      try {
        await axios.post('/rating', {
          rating: action.rating,
          book_id: action.bookAPIId,
        });
        store.dispatch(fetchBookReviews(action.bookGoogleId));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case SAVE_BOOK_TO_DB: {
      try {
        const response = await axios.post('/book', {
          title: action.bookTitle,
          public_api_id: action.bookGoogleId,
        });
        store.dispatch(saveBookId(response.data.id));
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
