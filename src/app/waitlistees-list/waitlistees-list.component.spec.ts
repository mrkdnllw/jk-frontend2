import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlisteesListComponent } from './waitlistees-list.component';

describe('WaitlisteesListComponent', () => {
  let component: WaitlisteesListComponent;
  let fixture: ComponentFixture<WaitlisteesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitlisteesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitlisteesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
