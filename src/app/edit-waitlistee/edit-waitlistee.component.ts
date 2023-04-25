import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Waitlistee } from '../waitlistee';
import { WaitlisteeService } from '../waitlistee.service';
 
@Component({
 selector: 'app-edit-waitlistee.component.ts',
 template: `
   <h2 class="text-center m-5">Edit Waitlistee</h2>
   <app-waitlistee-form [initialState]="waitlistee" (formSubmitted)="editWaitlistee($event)"></app-waitlistee-form>
 `
})
export class EditWaitlisteeComponent implements OnInit {
  waitlistee: BehaviorSubject<Waitlistee> = new BehaviorSubject({});
 
 constructor(
   private router: Router,
   private route: ActivatedRoute,
   private waitlisteeService: WaitlisteeService,
 ) { }
 
 ngOnInit() {
   const id = this.route.snapshot.paramMap.get('id');
   if (!id) {
     alert('No id provided');
   }
 
   this.waitlisteeService.getWaitlistee(id !).subscribe((waitlistee) => {
     this.waitlistee.next(waitlistee);
   });
 }
 
 editWaitlistee(waitlistee: Waitlistee) {
   this.waitlisteeService.updateWaitlistee(this.waitlistee.value._id || '', waitlistee)
     .subscribe({
       next: () => {
         this.router.navigate(['/waitlistees']);
       },
       error: (error) => {
         alert('Failed to update waitlistee');
         console.error(error);
       }
     })
 }
}