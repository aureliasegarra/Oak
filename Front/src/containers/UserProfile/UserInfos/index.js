import { connect } from 'react-redux';
import UserInfos from 'src/components/UserProfile/UserInfos';
import { logout } from 'src/actions';

const mapStateToProps = (state) => ({
  username: JSON.parse(localStorage.getItem('username')) || state.user.username,
  email: JSON.parse(localStorage.getItem('email')) || state.user.email,
  avatarId: JSON.parse(localStorage.getItem('avatarId')) || state.user.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfos);
