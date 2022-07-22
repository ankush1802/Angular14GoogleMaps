import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-kml-layer',
  templateUrl: './map-kml-layer.component.html',
  styleUrls: ['./map-kml-layer.component.css']
})
export class MapKmlLayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  kmlUrl = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
}
