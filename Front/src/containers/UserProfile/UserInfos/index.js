import { connect } from 'react-redux';
import UserInfos from 'src/components/UserProfile/UserInfos';

const mapStateToProps = (state) => ({
  username: JSON.parse(localStorage.getItem('username')) || state.user.username,
  email: JSON.parse(localStorage.getItem('email')) || state.user.email,
  badge: state.user.badge,
  avatarId: JSON.parse(localStorage.getItem('avatarId')) || state.user.avatar,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfos);
