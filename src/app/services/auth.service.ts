import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://ec2-44-211-156-254.compute-1.amazonaws.com:3000/api-menu/login';

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) {}
  
  loginUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  logoutUser(): void {
    this.storageService.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return this.storageService.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.storageService.getItem('token');
  }
}
