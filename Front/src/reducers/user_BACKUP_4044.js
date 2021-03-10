import { SET_USER_INFOS } from 'src/actions/userProfile';
import { SAVE_USER } from 'src/actions';

const initialState = {
<<<<<<< HEAD
  isLogged: false,
=======
  isLogged: true,
  id: 11,
  email: 'nico@nico.fr',
  password: 'nico',
  avatar: 1,
  loading: false,
  username: 'nico',
  badges: [],
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInVzZXJuYW1lIjoiTmljbyIsImVtYWlsIjoibmljb0BuaWNvLmZyIiwiYXZhdGFyIjoxLCJyb2xlX2lkIjoyLCJpYXQiOjE2MTUyOTU4Mjh9.5uMW1wRug-MhTRgCSso1tr2CfrzK0jdqOKZMgeKwxgA',
  lists: [{
    id: 21,
    label: 'Lus',
  },
  {
    id: 22,
    label: 'A lire',
  }],
>>>>>>> feature/bookDetail
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_INFOS:
      return {
        ...state,
        lists: action.userInfos.lists,
      };
    case SAVE_USER:
      return {
        ...state,
        ...action.userInfos,
        isLogged: true,
      };
    default:
      return state;
  }
};
