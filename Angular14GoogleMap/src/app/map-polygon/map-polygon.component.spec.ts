import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPolygonComponent } from './map-polygon.component';

describe('MapPolygonComponent', () => {
  let component: MapPolygonComponent;
  let fixture: ComponentFixture<MapPolygonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapPolygonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapPolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
