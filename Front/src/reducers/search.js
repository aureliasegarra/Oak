import { SET_INPUT_VALUE, GET_RESULTS } from 'src/actions/search';

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
    case GET_RESULTS:
      console.log('case', action.type);
      return {
        ...state,
        results: state.results,
      };
    default:
      return state;
  }
};
