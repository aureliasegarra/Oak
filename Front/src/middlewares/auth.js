import axios from 'src/api/herokuAPI';
import { LOGIN, REGISTER, saveUser } from 'src/actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios.post('/login', {
        email: state.auth.login_email,
        password: state.auth.login_password,
      })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('isLogged', true);
          store.dispatch(saveUser(response.data));
        })
        .catch((err) => console.log('err', err));
      break;
    }
    case REGISTER: {
      const state = store.getState();
      axios.post('/register', {
        email: state.auth.register_email,
        password: state.auth.register_password,
        username: state.auth.register_username,
        avatar: 1,
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
