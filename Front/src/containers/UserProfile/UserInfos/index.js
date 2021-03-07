import { connect } from 'react-redux';
import UserInfos from 'src/components/UserProfile/UserInfos';

const mapStateToProps = (state) => ({
  username: state.user.username,
  email: state.user.email,
  badge: state.user.badge,
  avatar: state.user.avatar,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfos);
