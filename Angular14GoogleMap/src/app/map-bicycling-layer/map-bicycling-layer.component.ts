import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-bicycling-layer',
  templateUrl: './map-bicycling-layer.component.html',
  styleUrls: ['./map-bicycling-layer.component.css']
})
export class MapBicyclingLayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
}
