import { RECEIVE_BENCHES } from '../actions/bench_actions';
import merge from 'lodash/merge';

const BenchesReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BENCHES:
      let newState = merge({}, state, {benches: action.benches});
      return newState;

    default:
      return state;

  }
};

export default BenchesReducer;
