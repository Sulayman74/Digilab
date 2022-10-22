import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryModalComponent } from './directory-modal.component';

describe('DirectoryModalComponent', () => {
  let component: DirectoryModalComponent;
  let fixture: ComponentFixture<DirectoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
