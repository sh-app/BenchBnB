import { applyMiddleware } from 'redux';
import SessionMiddleware from './session';
import BenchesMiddleware from './benches';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BenchesMiddleware
);

export default RootMiddleware;
