import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  template: `
   <form class="user-form" autocomplete="off" [formGroup]="userForm" (ngSubmit)="submitForm()">
     <div class="form-floating mb-3">
       <input class="form-control" type="text" id="username" formControlName="username" placeholder="username" required>
       <label for="username">username</label>
     </div>
 
     <div *ngIf="username.invalid && (username.dirty || username.touched)" class="alert alert-danger">
       <div *ngIf="username.errors?.['required']">
         Name is required.
       </div>
       <div *ngIf="username.errors?.['minlength']">
         Name must be at least 3 characters long.
       </div>
     </div>
 
     <div class="form-floating mb-3">
       <input class="form-control" type="text" formControlName="password" placeholder="password" required>
       <label for="password">password</label>
     </div>
 
     <div *ngIf="password.invalid && (password.dirty || password.touched)" class="alert alert-danger">
 
       <div *ngIf="password.errors?.['required']">
         Position is required.
       </div>
       <div *ngIf="password.errors?.['minlength']">
         Position must be at least 5 characters long.
       </div>
     </div>
     <div class="form-floating mb-3">
       <input class="form-control" type="text" formControlName="password" placeholder="password" required>
       <label for="password">password</label>
     </div>
 
     <div *ngIf="email.invalid && (email.dirty || email.touched)" class="alert alert-danger">
 
       <div *ngIf="email.errors?.['required']">
         Position is required.
       </div>
       <div *ngIf="email.errors?.['minlength']">
         Position must be at least 5 characters long.
       </div>
     </div>
 
     <button class="btn btn-primary" type="submit" [disabled]="userForm.invalid">Add</button>
   </form>
 `,
  styles: [
    `.employee-form {
     max-width: 560px;
     margin-left: auto;
     margin-right: auto;
   }`
  ]
})
export class UserFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<User> = new BehaviorSubject({});

  @Output()
  formValuesChanged = new EventEmitter<User>();

  @Output()
  formSubmitted = new EventEmitter<User>();

  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  get username() { return this.userForm.get('username')!; }
  get password() { return this.userForm.get('password')!; }
  get email() { return this.userForm.get('email')!; }

  ngOnInit() {
    this.initialState.subscribe(user => {
      this.userForm
     = this.fb.group({
        username: [user.username, [Validators.required]],
        password: [user.password, [Validators.required, Validators.minLength(5)]],
        email: [user.email, [Validators.required]]
      });
    });

    this.userForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  submitForm() {
    this.formSubmitted.emit(this.userForm.value);
  }
}