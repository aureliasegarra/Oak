import axios from 'axios';
import { FETCH_DATA, saveData } from 'src/actions/search';


const search = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA: {
      console.log('case', FETCH_DATA);
      const state = store.getState();
      const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=${state.search.inputValue}`;
      const fetchData = async () => {
        try {
          const response = await axios.get(baseUrl);
          console.log('response', response.data);
          store.dispatch(saveData(response.data));
        }
        catch (error) {
          console.log('error', error);
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
