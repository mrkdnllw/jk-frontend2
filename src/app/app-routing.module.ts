import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component'; // <-- add this line
import { EditEmployeeComponent } from './edit-employee/edit-employee.component'; // <-- add this line

import { UsersListComponent } from './users-list/users-list.component';
import { WaitlisteesListComponent } from './waitlistees-list/waitlistees-list.component';

const routes: Routes = [
 { path: '11', redirectTo: 'employees', pathMatch: 'full' },
 { path: 'employees11', component: EmployeesListComponent },
 { path: 'employees/new', component: AddEmployeeComponent }, // <-- add this line
 { path: 'employees/edit/:id', component: EditEmployeeComponent },
 { path: 'users', component: UsersListComponent },
 { path: '', redirectTo: 'waitlistees', pathMatch: 'full' },
 //{ path: 'waitlistees', component: EmployeesListComponent },
 { path: 'waitlistees', component: WaitlisteesListComponent },

]; // <-- add this line
 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }