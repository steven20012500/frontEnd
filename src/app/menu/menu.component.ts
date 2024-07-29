import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";
import { AuthService } from "../services/auth.service";
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
    })
    export class MenuComponent implements OnInit {
        isMobileMenuOpen = false;
        isUserMenuOpen = false;
        isAuth = false;
        constructor(private storageService: StorageService, private authService: AuthService) {}
  ngOnInit(): void {
    this.isAuth = this.authService.isLoggedIn();
  }
      
        toggleMobileMenu() {
          this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
      
        toggleUserMenu() {
          this.isUserMenuOpen = !this.isUserMenuOpen;
        }
        cerrarSesion() {
          this.storageService.removeItem('token');
        }
    }
   