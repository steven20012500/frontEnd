import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StorageService } from '../storage.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuarios: User = {
    cedula: '',
    password: '',
  };
  
  constructor(private authService: AuthService,private storageService: StorageService, private router: Router) {}
  
  loginUser() {
    this.authService.loginUser(this.usuarios).subscribe({
      next: res => {
        this.storageService.setItem('token', res.token);
        this.router.navigate(['/galeria']);
      },
      error: err => console.error(err)
    });
  }
  
}
