import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WaitlisteesListComponent } from './waitlistees-list/waitlistees-list.component';
import { WaitlisteeFormComponent } from './waitlistee-form/waitlistee-form.component';
import { AddWaitlisteeComponent } from './add-waitlistee/add-waitlistee.component';
import { EditWaitlisteeComponent } from './edit-waitlistee/edit-waitlistee.component'; // <-- add this line

@NgModule({
  declarations: [
    AppComponent,


    WaitlisteesListComponent,
    WaitlisteeFormComponent,
    AddWaitlisteeComponent,
    EditWaitlisteeComponent
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