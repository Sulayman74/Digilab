import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarLeftComponent } from './side-bar-left.component';

describe('SideBarLeftComponent', () => {
  let component: SideBarLeftComponent;
  let fixture: ComponentFixture<SideBarLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
