import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Waitlistee } from './waitlistee';
import * as dotenv from "dotenv";


@Injectable({
  providedIn: 'root'
})
export class WaitlisteeService {

  private url = 'http://localhost:4000';
  //private url = "http://jk-backend-for-ui.herokuapp.com/"
 //private url1 = process.env['HOST'];
 //private url = process.env['HOST1'];


  //private url = process.env.HOST1;

  private waitlistees$: Subject<Waitlistee[]> = new Subject();


  constructor(private httpClient: HttpClient) { }


  private refreshWaitlistees() {
    this.httpClient.get<Waitlistee[]>(`${this.url}/waitlistees`)
      .subscribe(waitlistees => {
        this.waitlistees$.next(waitlistees);
      });
  }

  getWaitlistees(): Subject<Waitlistee[]> {
    this.refreshWaitlistees();
    return this.waitlistees$;
  }

  getWaitlistee(id: string): Observable<Waitlistee> {
    return this.httpClient.get<Waitlistee>(`${this.url}/waitlistees/${id}`);
  }

  createWaitlistee(user: Waitlistee): Observable<string> {
    return this.httpClient.post(`${this.url}/waitlistees`, user, { responseType: 'text' });
  }

  updateWaitlistee(id: string, user: Waitlistee): Observable<string> {
    return this.httpClient.put(`${this.url}/waitlistees/${id}`, user, { responseType: 'text' });
  }

  deleteWaitlistee(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/waitlistees/${id}`, { responseType: 'text' });
  }




}
