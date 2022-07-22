import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTransitLayerComponent } from './map-transit-layer.component';

describe('MapTransitLayerComponent', () => {
  let component: MapTransitLayerComponent;
  let fixture: ComponentFixture<MapTransitLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapTransitLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapTransitLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
