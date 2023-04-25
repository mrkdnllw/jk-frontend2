import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { WaitlisteesListComponent } from './waitlistees-list/waitlistees-list.component'; // <-- add this line
 
@NgModule({
 declarations: [
   AppComponent,
   EmployeesListComponent,
   EmployeeFormComponent,
   AddEmployeeComponent,
   EditEmployeeComponent,
   UsersListComponent,
   UserFormComponent,
   WaitlisteesListComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   HttpClientModule,
   ReactiveFormsModule // <-- add this line
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }