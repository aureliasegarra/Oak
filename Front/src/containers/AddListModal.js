import { connect } from 'react-redux';
import AddListModal from 'src/components/UserProfile/AddList/AddListModal';
import { onAddListInputValueChange, createList } from 'src/actions/userProfile';

const mapStateToProps = (state) => ({
  addListInputValue: state.userProfile.addListInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  onAddListInputValueChange: () => {
    dispatch(onAddListInputValueChange());
  },
  createList: () => {
    dispatch(createList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddListModal);
