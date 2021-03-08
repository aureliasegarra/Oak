import { connect } from 'react-redux';
import AddList from 'src/components/UserProfile/AddList';
import { toggleAddListModal, setNewListName, createList } from 'src/actions/userProfile';

const mapStateToProps = (state) => ({
  isModalOpen: state.userProfile.isModalOpen,
  addListInputValue: state.userProfile.addListInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  toggleAddListModal: () => dispatch(toggleAddListModal()),
  setNewListName: (addListInputValue) => {
    dispatch(setNewListName(addListInputValue));
  },
  createList: () => dispatch(createList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddList);
