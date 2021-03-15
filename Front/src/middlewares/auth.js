import axios from 'src/api/herokuAPI';
import { LOGIN, REGISTER, saveUser, SUBSCRIBED } from 'src/actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios.post('/login', {
        email: state.auth.login_email,
        password: state.auth.login_password,
      })
        .then((response) => {
          axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          store.dispatch(saveUser(response.data));
        })
        .catch((err) => console.log('err', err));
      break;
    }
    case REGISTER: {
      const state = store.getState();
      console.log(state);
      axios.post('/register', {
        email: state.auth.register_email,
        password: state.auth.register_password,
        username: state.auth.register_username,
        avatar: state.auth.register_avatar,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log('err', err));
      break;
    }
    default:
      return next(action);
  }
};
