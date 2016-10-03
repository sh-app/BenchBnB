import React from 'react';
import MarkerManager from '../util/marker_manager';

export default class BenchMap extends React.Component {
  constructor(props) {
    super(props);
    this.benches = this.props.benches.benches;
  }

  componentDidMount() {
  const mapDOMNode = this.refs.map;
  const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
  this.map = new google.maps.Map(mapDOMNode, mapOptions);
  this.MarkerManager = new MarkerManager(this.map);
  this.MarkerManager.updateMarkers(this.benches);
}

  componentWillReceiveProps(nextProps) {
    debugger
    this.MarkerManager.updateMarkers(nextProps.benches.benches);
  }

  render() {
    debugger
    return(
      <div id='map-container' ref='map'>
      </div>
    );
  }
}
