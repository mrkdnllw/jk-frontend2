import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWaitlisteeComponent } from './edit-waitlistee.component';

describe('EditWaitlisteeComponent', () => {
  let component: EditWaitlisteeComponent;
  let fixture: ComponentFixture<EditWaitlisteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWaitlisteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWaitlisteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
