import { connect } from 'react-redux';
import AddListModal from 'src/components/UserProfile/AddList/AddListModal';
import { setNewListName, createList } from 'src/actions/userProfile';

const mapStateToProps = (state) => ({
  addListInputValue: state.userProfile.addListInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  setNewListName: () => {
    dispatch(setNewListName());
  },
  createList: () => {
    dispatch(createList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddListModal);
