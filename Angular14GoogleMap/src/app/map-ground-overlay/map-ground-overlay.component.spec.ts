import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGroundOverlayComponent } from './map-ground-overlay.component';

describe('MapGroundOverlayComponent', () => {
  let component: MapGroundOverlayComponent;
  let fixture: ComponentFixture<MapGroundOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGroundOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGroundOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
