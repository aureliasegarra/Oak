import { connect } from 'react-redux';
import AddList from 'src/components/UserProfile/AddList';
import { createList } from 'src/actions/userProfile';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  createList: (newListName) => dispatch(createList(newListName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddList);
