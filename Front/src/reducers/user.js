import { SET_USER_INFOS } from 'src/actions/userProfile';

const initialState = {
  isLogged: true,
  id: 1,
  email: 'aurelia@oak.fr',
  password: '',
  avatar: '1',
  loading: false,
  username: 'aurelia',
  badges: [],
  token: null,
  lists: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_INFOS:
      return {
        ...state,
        lists: action.userInfos.lists,
      };
    default:
      return state;
  }
};
