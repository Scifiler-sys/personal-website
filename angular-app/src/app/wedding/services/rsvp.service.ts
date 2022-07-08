import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { RSVP } from '../models/RSVP';

@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  private readonly url = "https://stephen-pagdilao-backend-app.herokuapp.com/RSVP/";

  constructor(private http: HttpClient) { }

  sendRSVP(rsvp:RSVP) : Observable<RSVP> {
    return this.http.post<RSVP>(this.url + "Add", rsvp)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    }
    else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
