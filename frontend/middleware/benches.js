import { REQUEST_BENCHES, receiveBenches} from '../actions/bench_actions';
import { fetchBenches} from '../util/bench_api_util';

const BenchesMiddleware = ({getstate, dispatch}) => next => action => {
  switch (action.type) {

    case REQUEST_BENCHES:
      const success = (benches) => dispatch(receiveBenches(benches));
      fetchBenches(success);
      return next(action)

    default:
      return next(action);

  }
}

export default BenchesMiddleware
