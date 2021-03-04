import { connect } from 'react-redux';
import Results from 'src/components/Home/Results';

const mapStateToProps = (state) => ({
  results: state.search.results,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
