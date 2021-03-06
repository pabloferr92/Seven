import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpHeaders = new HttpHeaders({'Content-Type':"aplication/json"})

  baseUrl = 'http://localhost:8000/'

  constructor(private http: HttpClient) { }

  listUsers() : Observable<any> {
   return this.http.get(this.baseUrl + 'users/',
   {'headers': this.httpHeaders });
  };

  getMember(id) : Observable<any> {
    return this.http.get(this.baseUrl+'users/' + id + '/',
    {'headers': this.httpHeaders });
   };
}
