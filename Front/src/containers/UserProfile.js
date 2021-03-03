import { connect } from 'react-redux';
import UserProfile from 'src/components/UserProfile';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  pseudo: state.user.pseudo,
  avatar: state.user.avatar,
  lists: state.user.lists,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
