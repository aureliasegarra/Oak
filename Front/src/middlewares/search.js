import axios from 'axios';
import {
  FETCH_DATA,
  saveData,
  isLoading,
  setInputValue,
} from 'src/actions/search';

const search = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA: {
      store.dispatch(isLoading(true));
      const state = store.getState();
      const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=${state.search.inputValue}`;
      const fetchData = async () => {
        try {
          const response = await axios.get(baseUrl);
          store.dispatch(saveData(response.data.items));
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
