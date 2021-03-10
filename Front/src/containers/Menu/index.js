import { connect } from 'react-redux';
import Menu from 'src/components/Menu';
import { toggleBurgerMenu } from 'src/actions/menu';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.username,
  id: state.user.id,
  open: state.open,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButton: () => {
    console.log('youpi');
    const action = toggleBurgerMenu();
    console.log('action ok');
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
