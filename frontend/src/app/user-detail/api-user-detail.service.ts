import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiUserDetailService {

  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({'Content-Type':"aplication/json"})

  baseUrl = 'http://localhost:8000/'


  getUser(id) : Observable<any> {
    return this.http.get(this.baseUrl+'users/' + id + '/',
    {'headers': this.httpHeaders });
   };

}
