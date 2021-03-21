import axios from 'src/api/herokuAPI';
import {
  LOGIN, REGISTER, saveUser,
} from 'src/actions/auth';

const auth = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOGIN: {
      try {
        const state = store.getState();
        const response = await axios.post('/login', {
          email: state.auth.login_email,
          password: state.auth.login_password,
        });

        localStorage.setItem('avatarId', JSON.stringify(response.data.avatar));
        localStorage.setItem('userId', JSON.stringify(response.data.id));
        localStorage.setItem('username', JSON.stringify(response.data.username));
        localStorage.setItem('email', JSON.stringify(response.data.email));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isLogged', JSON.stringify(true));

        store.dispatch(saveUser(response.data));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    case REGISTER: {
      try {
        const state = store.getState();
        axios.post('/register', {
          email: state.auth.register_email,
          password: state.auth.register_password,
          username: state.auth.register_username,
          avatar: state.auth.register_avatar,
        });
      }
      catch (error) {
        console.log(error);
      }
      break;
    }
    default:
      next(action);
  }
};

export default auth;
