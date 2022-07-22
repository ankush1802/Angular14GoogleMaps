import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-transit-layer',
  templateUrl: './map-transit-layer.component.html',
  styleUrls: ['./map-transit-layer.component.css']
})
export class MapTransitLayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
}
