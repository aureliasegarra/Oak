import { connect } from 'react-redux';
import UserProfile from 'src/components/UserProfile';
import { fetchUserInfos } from '../actions/userProfile';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.username,
  email: state.user.email,
  badge: state.user.badge,
  avatar: state.user.avatar,
  lists: state.user.lists,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfos: () => dispatch(fetchUserInfos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
