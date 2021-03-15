import { connect } from 'react-redux';
import Login from 'src/components/Authentication/Login';
import { login } from 'src/actions';

const mapState = (state) => ({
  isLogged: JSON.parse(localStorage.getItem('isLogged')) || state.user.isLogged,
});

const mapDispatch = (dispatch) => ({
  login: () => {
    dispatch(login());
  },
});

export default connect(mapState, mapDispatch)(Login);
