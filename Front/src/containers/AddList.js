import { connect } from 'react-redux';
import AddList from 'src/components/UserProfile/AddList';
import { toggleAddListModal, onAddListInputValueChange, createList } from 'src/actions/userProfile';

const mapStateToProps = (state) => ({
  openModal: state.userProfile.openModal,
  addListInputValue: state.userProfile.addListInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  toggleAddListModal: () => dispatch(toggleAddListModal()),
  onAddListInputValueChange: (addListInputValue) => {
    dispatch(onAddListInputValueChange(addListInputValue));
  },
  createList: () => dispatch(createList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddList);
