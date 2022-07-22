import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-polygon',
  templateUrl: './map-polygon.component.html',
  styleUrls: ['./map-polygon.component.css']
})
export class MapPolygonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  vertices: google.maps.LatLngLiteral[] = [
    {lat: 13, lng: 13},
    {lat: -13, lng: 0},
    {lat: 13, lng: -13},
  ];
}
