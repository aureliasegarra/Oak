import axios from 'src/api/herokuAPI';
import { LOGIN } from 'src/actions';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios.post('/login', {
        email: state.user.email,
        password: state.user.password,
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
