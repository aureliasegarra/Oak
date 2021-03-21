import { connect } from 'react-redux';
import Menu from 'src/components/Menu';
import { emptyResults } from 'src/actions/search';

const mapStateToProps = (state) => ({
  isLogged: JSON.parse(localStorage.getItem('isLogged')) || state.user.isLogged,
  username: JSON.parse(localStorage.getItem('username')) || state.user.username,
  id: JSON.parse(localStorage.getItem('userId')) || state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  emptyResults: () => {
    dispatch(emptyResults());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
