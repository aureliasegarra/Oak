import { SET_LIST_DETAILS } from 'src/actions/userProfile';

const initialState = {
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LIST_DETAILS:
      return {
        ...state,
        ...action.listDetails,
      };
    default:
      return state;
  }
};
