import { connect } from 'react-redux';
import AddListModal from 'src/components/UserProfile/AddList/AddListModal';
import { setAddListValue, createList } from 'src/actions/userProfile';

const mapStateToProps = (state) => ({
  addListInputValue: state.userProfile.addListInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  setAddListValue: () => {
    dispatch(setAddListValue());
  },
  createList: () => {
    dispatch(createList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddListModal);
