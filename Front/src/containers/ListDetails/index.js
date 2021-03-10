import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListDetails from 'src/components/ListDetails';
import { fetchListDetails } from 'src/actions/userProfile';

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10);

  return {
    id,
    list: state.lists,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchListDetails: (listId) => dispatch(fetchListDetails(listId)),
});

const container = connect(mapStateToProps, mapDispatchToProps)(ListDetails);

export default withRouter(container);
