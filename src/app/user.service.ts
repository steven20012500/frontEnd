import { Injectable } from '@angular/core';
import { User } from './users/users.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // URL al archivo JSON

  constructor(private http: HttpClient) { }
  
  obtenerDatosUser(): Observable<any>{
    return this.http.get<User[]>(this.apiUrl);
  }
}
