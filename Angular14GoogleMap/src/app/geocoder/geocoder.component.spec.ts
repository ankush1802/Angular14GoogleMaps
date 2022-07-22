import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocoderComponent } from './geocoder.component';

describe('GeocoderComponent', () => {
  let component: GeocoderComponent;
  let fixture: ComponentFixture<GeocoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeocoderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeocoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
