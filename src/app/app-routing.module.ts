import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaitlisteesListComponent } from './waitlistees-list/waitlistees-list.component';
import { EditWaitlisteeComponent } from './edit-waitlistee/edit-waitlistee.component';
import { AddWaitlisteeComponent } from './add-waitlistee/add-waitlistee.component';

const routes: Routes = [
    { path: '11', redirectTo: 'employees', pathMatch: 'full' },
    { path: '', redirectTo: 'waitlistees', pathMatch: 'full' },
    { path: 'waitlistees', component: WaitlisteesListComponent },
    { path: 'waitlistees/new', component: AddWaitlisteeComponent }, // <-- add this line
    { path: 'waitlistees/edit/:id', component: EditWaitlisteeComponent }]; // <-- add this line



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }