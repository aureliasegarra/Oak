import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookDetails from 'src/components/BookDetails';
import { findBookById } from 'src/selectors/results';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    result: findBookById(state.search.results, id),
  };
};

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(BookDetails);

export default withRouter(container);
