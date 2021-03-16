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
          localStorage.setItem('avatarId', JSON.stringify(response.data.avatar));
          localStorage.setItem('userId', JSON.stringify(response.data.id));
          localStorage.setItem('username', JSON.stringify(response.data.username));
          localStorage.setItem('email', JSON.stringify(response.data.email));
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('isLogged', JSON.stringify(true));
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
