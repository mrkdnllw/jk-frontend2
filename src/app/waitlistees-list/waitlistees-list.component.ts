import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Waitlistee } from '../waitlistee';
import { WaitlisteeService } from '../waitlistee.service';


@Component({
  selector: 'app-waitlistees-list',
  template: `
   <h2 class="text-center m-5">Waitlistees List</h2>
 
   <table class="table table-striped table-bordered">
       <thead>
           <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Tag</th>
               <th>Phone</th>
           </tr>
       </thead>
 
       <tbody>
           <tr *ngFor="let waitlistee of waitlistees$ |paginate
              : {
                  itemsPerPage: tableSize,
                  currentPage: page,
                  totalItems: count
                };
          let i = index
           
    
           ">
               <td>{{waitlistee.name}}</td>
               <td>{{waitlistee.email}}</td>
               <td>{{waitlistee.tag}}</td>
               <td>{{waitlistee.phone}}</td>
               <td>
                   <button class="btn btn-primary me-1" [routerLink]="['edit/', waitlistee._id]">Edit</button>
                   <button class="btn btn-danger" (click)="deleteWaitlistee(waitlistee._id || '')">Delete</button>
               </td>
           </tr>
       </tbody>
   </table>
 
   <button class="btn btn-primary mt-3" [routerLink]="['new']">Add Waitlistee</button>

   <div class="d-flex justify-content-center">
    <pagination-controls
      previousLabel="Prev"
      nextLabel="Next"
      (pageChange)="onTableDataChange($event)"
    >
    </pagination-controls>
  </div>
 `

 
})



export class WaitlisteesListComponent implements OnInit {

  //waitlistees$: Observable<Waitlistee[]> = new Observable();

 // waitlistees$: Waitlistee[]> = new Observable();
waitlistees$: any;

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];


  constructor(private waitlisteeService: WaitlisteeService) { }
  
  ngOnInit(): void {
    this.fetchWaitlistees();
  }


  deleteWaitlistee(id: string): void {
    this.waitlisteeService.deleteWaitlistee(id).subscribe({
      next: () => this.fetchWaitlistees()
    });
  }
  
  private fetchWaitlistees(): void {
    this.waitlistees$ = this.waitlisteeService.getWaitlistees().subscribe((response) =>{

      this.waitlistees$ = response;
      
    console.log(this.waitlistees$);
    });

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchWaitlistees();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchWaitlistees();
  }


  

}
