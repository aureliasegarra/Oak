import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { login } from 'src/actions';

const mapState = null;

const mapDispatch = (dispatch) => ({
  login: () => {
    dispatch(login());
  },
});

export default connect(mapState, mapDispatch)(Login);
