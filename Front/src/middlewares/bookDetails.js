import { ADD_TO_READ_LIST, ADD_TO_TO_READ_LIST } from 'src/actions/search';
import axios from 'src/api/herokuAPI';

const bookDetails = (store) => (next) => async (action) => {
  const { user: { id } } = store.getState();
  switch (action.type) {
    case ADD_TO_READ_LIST: {
      console.log(action);
      try {
        const res = await axios.post('/book', {
          public_api_id: action.publicApiId,
          title: action.title,
          list_id: action.listId,
          user_id: id,
        });
        console.log(res);
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case ADD_TO_TO_READ_LIST: {
      console.log(action);
      try {
        const res = await axios.post('/book', {
          public_api_id: action.publicApiId,
          title: action.title,
          list_id: action.listId,
          user_id: id,
        });
        console.log(res);
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
