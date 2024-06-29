import { Injectable } from '@angular/core';
import { User } from './users/users.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // URL al archivo JSON
  private apiUrl2 = 'http://localhost:3000/api-menu/registro';

  constructor(private http: HttpClient) { }

  
  obtenerDatosUser(): Observable<any>{
    return this.http.get<User[]>(this.apiUrl);
  }
    
  agregarUser(user: any) {
    return this.http.post(this.apiUrl2, user);
  }
}
