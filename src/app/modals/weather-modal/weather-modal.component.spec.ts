import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherModalComponent } from './weather-modal.component';

describe('WeatherModalComponent', () => {
  let component: WeatherModalComponent;
  let fixture: ComponentFixture<WeatherModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
