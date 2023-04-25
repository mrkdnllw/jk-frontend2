import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Waitlistee } from '../waitlistee';
//import { Employee } from '../employee';

@Component({
  selector: 'app-waitlistee-form',


  template: `
   <form class="waitlistee-form" autocomplete="off" [formGroup]="waitlisteeForm" (ngSubmit)="submitForm()">
     <div class="form-floating mb-3">
       <input class="form-control" type="text" id="name" formControlName="name" placeholder="Name" required>
       <label for="name">Name</label>
     </div>
 
     <div *ngIf="name.invalid && (name.dirty || name.touched)" class="alert alert-danger">
       <div *ngIf="name.errors?.['required']">
         Name is required.
       </div>
       <div *ngIf="name.errors?.['minlength']">
         Name must be at least 3 characters long.
       </div>
     </div>
 
     <div class="form-floating mb-3">
       <input class="form-control" type="text" formControlName="email" placeholder="Email" required>
       <label for="email">Email</label>
     </div>
 
     <div *ngIf="email.invalid && (email.dirty || email.touched)" class="alert alert-danger">
 
       <div *ngIf="email.errors?.['required']">
         Position is required.
       </div>
       <div *ngIf="email.errors?.['minlength']">
         Position must be at least 5 characters long.
       </div>
     </div>

     <div class="form-floating mb-3">
       <input class="form-control" type="text" formControlName="tag" placeholder="Tag" required>
       <label for="tag">Tag</label>
     </div>
 
     <div *ngIf="tag.invalid && (tag.dirty || tag.touched)" class="alert alert-danger">
 
       <div *ngIf="tag.errors?.['required']">
         Position is required.
       </div>
       <div *ngIf="tag.errors?.['minlength']">
         Position must be at least 5 characters long.
       </div>
     </div>

     <div class="form-floating mb-3">
       <input class="form-control" type="text" formControlName="phone" placeholder="Phone" required>
       <label for="phone">Phone</label>
     </div>
 
     <div *ngIf="phone.invalid && (phone.dirty || phone.touched)" class="alert alert-danger">
 
       <div *ngIf="phone.errors?.['required']">
         Position is required.
       </div>
       <div *ngIf="phone.errors?.['minlength']">
         Position must be at least 5 characters long.
       </div>
     </div>
 

 
     <button class="btn btn-primary" type="submit" [disabled]="waitlisteeForm.invalid">Add/Edit</button>
   </form>
 `,
  styles: [
    `.waitlistee-form {
     max-width: 560px;
     margin-left: auto;
     margin-right: auto;
   }`
  ]


})
export class WaitlisteeFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<Waitlistee> = new BehaviorSubject({});

  @Output()
  formValuesChanged = new EventEmitter<Waitlistee>();

  @Output()
  formSubmitted = new EventEmitter<Waitlistee>();

  waitlisteeForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  get name() { return this.waitlisteeForm.get('name')!; }
  get email() { return this.waitlisteeForm.get('email')!; }
  get tag() { return this.waitlisteeForm.get('tag')!; }
  get phone() { return this.waitlisteeForm.get('phone')!; }

  ngOnInit() {
    this.initialState.subscribe(waitlistee => {
      this.waitlisteeForm = this.fb.group({
        name: [waitlistee.name, [Validators.required]],
        email: [waitlistee.email, [Validators.required, Validators.minLength(5)]],
        tag: [waitlistee.tag, [Validators.required]],
        phone: [waitlistee.phone, [Validators.required]]
      });
    });

    this.waitlisteeForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  submitForm() {
    this.formSubmitted.emit(this.waitlisteeForm.value);
  }
}