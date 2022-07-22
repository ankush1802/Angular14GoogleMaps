import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTrafficLayerComponent } from './map-traffic-layer.component';

describe('MapTrafficLayerComponent', () => {
  let component: MapTrafficLayerComponent;
  let fixture: ComponentFixture<MapTrafficLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapTrafficLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapTrafficLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
