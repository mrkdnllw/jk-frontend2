import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWaitlisteeComponent } from './add-waitlistee.component';

describe('AddWaitlisteeComponent', () => {
  let component: AddWaitlisteeComponent;
  let fixture: ComponentFixture<AddWaitlisteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWaitlisteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWaitlisteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
