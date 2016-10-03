import React from 'react';

const BenchIndexItem = ({bench}) => {
  return(
  <li>
    <h4>{bench.description}</h4>
    <p>location {bench.lat}, {bench.lng}</p>
  </li>
)};

export default BenchIndexItem;
