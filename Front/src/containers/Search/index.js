import { connect } from 'react-redux';
import Search from 'src/components/Home/Search';
import { setInputValue, getResults } from 'src/actions/search';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputValue: (value) => {
    const action = setInputValue(value);
    dispatch(action);
  },
  onSubmitForm: () => {
    console.log('je veux obtenir les resultats');
    const action = getResults();
    console.log('action', action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
