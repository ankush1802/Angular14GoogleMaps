import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDirectionsRendererComponent } from './map-directions-renderer.component';

describe('MapDirectionsRendererComponent', () => {
  let component: MapDirectionsRendererComponent;
  let fixture: ComponentFixture<MapDirectionsRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapDirectionsRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapDirectionsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
