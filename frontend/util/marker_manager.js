export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.addedBenches = [];
    this.markers = [];
  }

  updateMarkers(benches) {
    let benchestoAdd = this._benchestoAdd(benches);
    if (benchestoAdd.length >= 1) {
      for (var i = 0; i < benchestoAdd.length; i++) {
        this._createMarkerFromBench(benchestoAdd[i]);
      }
    }
  }

  _benchestoAdd(benches=[]) {
    let benchestoAdd = [];
    for (var i = 0; i < benches.length; i++) {
      if (!this.addedBenches.includes(benches[i])) {
        benchestoAdd.push(benches[i]);
      }
    }
    return benchestoAdd;
  }

  _createMarkerFromBench(bench) {
    debugger
    let marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: bench.description
    });
    this.markers.push(marker);
    this.addedBenches.push(bench);
  }
}
