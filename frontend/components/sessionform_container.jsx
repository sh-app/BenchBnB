import { connect }  from 'react-redux';
import SessionForm from './sessionform';
import { signup, login } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.currentUser ? true: false,
  errors: state.session.errors,
  formType: ownProps.location.pathname

});


const mapDispatchtoProps = (dispatch, ownProps) => {
  let formType = ownProps.location.pathname;
  if (formType === '/signup') {
    return ({
      processForm: (user) => dispatch(signup(user))
    });
  } else if (formType === '/login') {
    return ({
      processForm: (user) => dispatch(login(user))
    });
  }
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(SessionForm);
