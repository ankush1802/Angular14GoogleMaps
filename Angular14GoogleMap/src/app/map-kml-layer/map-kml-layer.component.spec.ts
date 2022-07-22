import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapKmlLayerComponent } from './map-kml-layer.component';

describe('MapKmlLayerComponent', () => {
  let component: MapKmlLayerComponent;
  let fixture: ComponentFixture<MapKmlLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapKmlLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapKmlLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
