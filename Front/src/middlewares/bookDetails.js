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
} from 'src/actions/bookDetail';
import axios from 'src/api/herokuAPI';
import axiosGoogle from 'src/api/googleAPI';

const bookDetails = (store) => (next) => async (action) => {
  switch (action.type) {
    case ADD_TO_READ_LIST: {
      try {
        const res = await axios.post('/listHasBook', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          data: {
            public_api_id: action.publicApiId,
            title: action.title,
            list_id: action.listId,
          },
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
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          data: {
            public_api_id: action.publicApiId,
            title: action.title,
            list_id: action.listId,
          },
        });
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case FETCH_BOOK_DETAIL: {
      try {
        const result = await axiosGoogle.get(`${action.bookId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        store.dispatch(setBookDetail(result.data));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case FETCH_BOOK_REVIEWS: {
      try {
        const result = await axios.get(`/book/${action.bookId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
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
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          data: {
            label: action.labelComment,
            book_id: action.bookAPIId,
          },
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
        const res = await axios.post('/rating', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          data: {
            rating: action.rating,
            book_id: action.bookAPIId,
          },
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
