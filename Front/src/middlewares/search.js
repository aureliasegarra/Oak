import axios from 'axios';
import {
  FETCH_DATA,
  saveData,
  isLoading,
} from 'src/actions/search';
import { setInputValue } from '../actions/search';

const search = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA: {
      store.dispatch(isLoading(true));
      const state = store.getState();
      const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=${state.search.inputValue}`;
      const fetchData = async () => {
        try {
          const response = await axios.get(baseUrl);
          console.log('response', response.data.items);
          store.dispatch(saveData(response.data.items === (response.data.items.volumeInfo.maturityRating === 'NOT_MATURE')));
        }
        catch (error) {
          console.log('error', error);
        }
        finally {
          store.dispatch(isLoading(false));
          store.dispatch(setInputValue(''));
        }
      };
      fetchData();
      break;
    }
    default:
      next(action);
  }
};

export default search;
