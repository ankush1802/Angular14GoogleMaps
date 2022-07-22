import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBicyclingLayerComponent } from './map-bicycling-layer.component';

describe('MapBicyclingLayerComponent', () => {
  let component: MapBicyclingLayerComponent;
  let fixture: ComponentFixture<MapBicyclingLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapBicyclingLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapBicyclingLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
