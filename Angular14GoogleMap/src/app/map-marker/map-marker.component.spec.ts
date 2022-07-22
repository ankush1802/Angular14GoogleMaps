import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMarkerComponent } from './map-marker.component';

describe('MapMarkerComponent', () => {
  let component: MapMarkerComponent;
  let fixture: ComponentFixture<MapMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapMarkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
