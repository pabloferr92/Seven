import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  listUsers(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/users');
  }
}
