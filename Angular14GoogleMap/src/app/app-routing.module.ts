import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeocoderComponent } from './geocoder/geocoder.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { MapBicyclingLayerComponent } from './map-bicycling-layer/map-bicycling-layer.component';
import { MapCircleComponent } from './map-circle/map-circle.component';
import { MapDirectionsRendererComponent } from './map-directions-renderer/map-directions-renderer.component';
import { MapGroundOverlayComponent } from './map-ground-overlay/map-ground-overlay.component';
import { MapHeatmapLayerComponent } from './map-heatmap-layer/map-heatmap-layer.component';
import { MapInfoWindowComponent } from './map-info-window/map-info-window.component';
import { MapKmlLayerComponent } from './map-kml-layer/map-kml-layer.component';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { MapPolygonComponent } from './map-polygon/map-polygon.component';
import { MapPolylineComponent } from './map-polyline/map-polyline.component';
import { MapRectangleComponent } from './map-rectangle/map-rectangle.component';
import { MapTrafficLayerComponent } from './map-traffic-layer/map-traffic-layer.component';
import { MapTransitLayerComponent } from './map-transit-layer/map-transit-layer.component';

const routes: Routes = [
  {path:'',component:GooglemapComponent},
  {path: 'map-marker', component: MapMarkerComponent},
  {path: 'map-info-window', component: MapInfoWindowComponent},
  {path: 'map-polyline', component: MapPolylineComponent},
  {path: 'map-polygon', component: MapPolygonComponent},
  {path: 'map-rectangle', component: MapRectangleComponent},
  {path: 'map-circle', component: MapCircleComponent},
  {path: 'map-ground-overlay', component: MapGroundOverlayComponent},
  {path: 'map-kml-layer', component: MapKmlLayerComponent},
  {path: 'map-traffic-layer', component: MapTrafficLayerComponent},
  {path: 'map-transit-layer', component: MapTransitLayerComponent},
  {path: 'map-bicycling-layer', component: MapBicyclingLayerComponent},
  {path: 'map-directions-renderer', component: MapDirectionsRendererComponent},
  {path: 'map-heatmap-layer', component: MapHeatmapLayerComponent},
  {path: 'map-geocoder-service', component: GeocoderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
