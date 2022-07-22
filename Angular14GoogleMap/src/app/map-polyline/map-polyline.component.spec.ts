import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPolylineComponent } from './map-polyline.component';

describe('MapPolylineComponent', () => {
  let component: MapPolylineComponent;
  let fixture: ComponentFixture<MapPolylineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapPolylineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapPolylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
