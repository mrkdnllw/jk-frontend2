import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Waitlistee } from '../waitlistee';
import { WaitlisteeService } from '../waitlistee.service';
 
@Component({
 selector: 'app-add-waitlistee',
 template: `
   <h2 class="text-center m-5">Add a New Waitlistee</h2>
   <app-waitlistee-form (formSubmitted)="addWaitlistee($event)"></app-waitlistee-form>
 `
})
export class AddWaitlisteeComponent {
 constructor(
   private router: Router,
   private waitlisteeService: WaitlisteeService
 ) { }
 
 addWaitlistee(waitlistee: Waitlistee) {
   this.waitlisteeService.createWaitlistee(waitlistee)
     .subscribe({
       next: () => {
         this.router.navigate(['/waitlistees']);
       },
       error: (error) => {
         alert("Failed to create waitlistee");
         console.error(error);
       }
     });
 }
}