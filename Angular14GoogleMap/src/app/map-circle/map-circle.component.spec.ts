import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCircleComponent } from './map-circle.component';

describe('MapCircleComponent', () => {
  let component: MapCircleComponent;
  let fixture: ComponentFixture<MapCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
