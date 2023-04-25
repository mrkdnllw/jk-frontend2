import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlisteeFormComponent } from './waitlistee-form.component';

describe('WaitlisteeFormComponent', () => {
  let component: WaitlisteeFormComponent;
  let fixture: ComponentFixture<WaitlisteeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitlisteeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitlisteeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
