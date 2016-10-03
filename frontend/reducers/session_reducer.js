import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT } from '../actions/session_actions';

const defaultSession = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultSession, action) => {
  Object.freeze(state);
  let currentState= state;
  let newState;

  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      newState =  merge({}, currentState, { currentUser: action.currentUser });
      return newState;

    case RECEIVE_ERRORS:

      newState =  merge({}, currentState, { errors: action.errors });
      return newState;

    case LOGOUT:
      newState = defaultSession;
      return newState;

    default:
      return currentState;

  }
};


export default SessionReducer;
