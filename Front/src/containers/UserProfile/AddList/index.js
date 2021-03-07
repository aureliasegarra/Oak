import { connect } from 'react-redux';
import AddList from 'src/components/UserProfile/AddList';
import { toggleAddListModal, setAddListValue, createList } from 'src/actions/userProfile';

const mapStateToProps = (state) => ({
  isModalOpen: state.userProfile.isModalOpen,
  addListInputValue: state.userProfile.addListInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  toggleAddListModal: () => dispatch(toggleAddListModal()),
  setAddListValue: (addListInputValue) => {
    dispatch(setAddListValue(addListInputValue));
  },
  createList: () => dispatch(createList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddList);
