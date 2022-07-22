import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-rectangle',
  templateUrl: './map-rectangle.component.html',
  styleUrls: ['./map-rectangle.component.css']
})
export class MapRectangleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  bounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };
}
