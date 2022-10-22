import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewComponent } from './over-view.component';

describe('OverViewComponent', () => {
  let component: OverViewComponent;
  let fixture: ComponentFixture<OverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
