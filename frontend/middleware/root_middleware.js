import { applyMiddleware } from 'redux';
import SessionMiddleware from './session';

const RootMiddleware = applyMiddleware(
  SessionMiddleware
);

export default RootMiddleware;
