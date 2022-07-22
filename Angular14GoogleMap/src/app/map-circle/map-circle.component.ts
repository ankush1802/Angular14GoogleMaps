import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-circle',
  templateUrl: './map-circle.component.html',
  styleUrls: ['./map-circle.component.css']
})
export class MapCircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  circleCenter: google.maps.LatLngLiteral = {lat: 10, lng: 15};
  radius = 5;
}
