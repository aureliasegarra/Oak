import { SET_INPUT_VALUE, SEARCH_QUERY, SAVE_DATA } from 'src/actions/search';

const initialState = {
  inputValue: '',
  results: [],
  searchQuery: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value,
      };
    case SEARCH_QUERY:
      return {
        ...state,
        inputValue: action.value,
      };
    case SAVE_DATA:
      console.log('case', SAVE_DATA);
      return {
        ...state,
        results: action.results,
      };
    default:
      return state;
  }
};
