import React from 'react';
import { selectBench } from '../reducers/selectors';
import BenchIndexItem from './benchindexitem';

export default class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBenches();
  }

  render() {
    let allBenches = selectBench(this.props.benches.benches).map((bench)=> {
      return <BenchIndexItem key={bench.id} bench={bench} /> ;
    });
    return (
      <section>
        <h3>All Benches!</h3>
        <ul>
          {allBenches}
        </ul>
      </section>
    );
  }
}
