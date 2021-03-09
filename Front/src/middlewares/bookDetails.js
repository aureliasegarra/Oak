import { ADD_TO_READ_LIST } from 'src/actions/search';
import axios from 'src/api/herokuAPI';

const bookDetails = (store) => (next) => async (action) => {
  const { user: { id } } = store.getState();
  switch (action.type) {
    case ADD_TO_READ_LIST: {
      try {
        console.log(action);
        await axios.post('/book', {
          id: action.id,
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
    default:
      next(action);
  }
};

export default bookDetails;
