import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../class/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // URL al archivo JSON
  private apiUrl2 = 'http://localhost:3000/api-menu/registro';
  private apiUrl3 = 'http://localhost:3000/api-menu/obtenerCedula';

  constructor(private http: HttpClient) { }

  
  obtenerDatosUser(): Observable<any>{
    return this.http.get<User[]>(this.apiUrl);
  }
    
  agregarUser(user: any) {
    return this.http.post(this.apiUrl2, user);
  }

  getCedulaById(userId: string): Observable<{ cedula: string }> {
    const headers = new HttpHeaders().set('user-id', userId);
    return this.http.get<{ cedula: string }>(this.apiUrl3, { headers });
  }
}
