import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHeatmapLayerComponent } from './map-heatmap-layer.component';

describe('MapHeatmapLayerComponent', () => {
  let component: MapHeatmapLayerComponent;
  let fixture: ComponentFixture<MapHeatmapLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapHeatmapLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapHeatmapLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
