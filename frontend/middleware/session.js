import { LOGIN, LOGOUT, SIGNUP, receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { login, logout, signup } from '../util/session_api_util';

export default (store) => next => action  => {
  const loginSuccess = (user) => store.dispatch(receiveCurrentUser(user));
  const logError  = (errors) => {

    store.dispatch(receiveErrors(errors.responseJSON));
};

  switch (action.type) {
    case LOGIN:
      login(action.user, loginSuccess, logError);
      return next(action);
    case SIGNUP:
      signup(action.user, loginSuccess, logError);
      return next(action);
    case LOGOUT:
      return logout(next(action), logError);
    default:
      return next(action);

  }
};
