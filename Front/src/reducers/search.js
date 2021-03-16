import {
  SET_INPUT_VALUE,
  SEARCH_QUERY,
  SAVE_DATA,
  IS_LOADING,
  EMPTY_RESULTS,
} from 'src/actions/search';

const initialState = {
  inputValue: '',
  results: [],
  searchQuery: '',
  loading: false,
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
      return {
        ...state,
        results: action.results,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    case EMPTY_RESULTS:
      return {
        ...state,
        results: [],
      };
    default:
      return state;
  }
};
