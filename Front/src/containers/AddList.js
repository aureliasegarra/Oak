import { connect } from 'react-redux';
import AddList from 'src/components/UserProfile/AddList';
import { toggleAddListModal } from 'src/actions/userProfile';

const mapStateToProps = (state) => ({
  openModal: state.userProfile.openModal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleAddListModal: () => dispatch(toggleAddListModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddList);
