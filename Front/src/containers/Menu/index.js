import { connect } from 'react-redux';
import Menu from 'src/components/Menu';

const mapStateToProps = (state) => ({
  isLogged: JSON.parse(localStorage.getItem('isLogged')) || state.user.isLogged,
  username: state.user.username,
  id: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
