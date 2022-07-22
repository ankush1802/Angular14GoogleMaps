import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-traffic-layer',
  templateUrl: './map-traffic-layer.component.html',
  styleUrls: ['./map-traffic-layer.component.css']
})
export class MapTrafficLayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
}
