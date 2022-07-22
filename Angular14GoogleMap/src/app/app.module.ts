import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavigationBarComponent } from './app-navigation-bar/app-navigation-bar.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { MapInfoWindowComponent } from './map-info-window/map-info-window.component';
import { MapPolylineComponent } from './map-polyline/map-polyline.component';
import { MapPolygonComponent } from './map-polygon/map-polygon.component';
import { MapRectangleComponent } from './map-rectangle/map-rectangle.component';
import { MapCircleComponent } from './map-circle/map-circle.component';
import { MapGroundOverlayComponent } from './map-ground-overlay/map-ground-overlay.component';
import { MapKmlLayerComponent } from './map-kml-layer/map-kml-layer.component';
import { MapTrafficLayerComponent } from './map-traffic-layer/map-traffic-layer.component';
import { MapTransitLayerComponent } from './map-transit-layer/map-transit-layer.component';
import { MapBicyclingLayerComponent } from './map-bicycling-layer/map-bicycling-layer.component';
import { MapDirectionsRendererComponent } from './map-directions-renderer/map-directions-renderer.component';
import { MapHeatmapLayerComponent } from './map-heatmap-layer/map-heatmap-layer.component';
import { GeocoderComponent } from './geocoder/geocoder.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationBarComponent,
    GooglemapComponent,
    MapMarkerComponent,
    MapInfoWindowComponent,
    MapPolylineComponent,
    MapPolygonComponent,
    MapRectangleComponent,
    MapCircleComponent,
    MapGroundOverlayComponent,
    MapKmlLayerComponent,
    MapTrafficLayerComponent,
    MapTransitLayerComponent,
    MapBicyclingLayerComponent,
    MapDirectionsRendererComponent,
    MapHeatmapLayerComponent,
    GeocoderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
