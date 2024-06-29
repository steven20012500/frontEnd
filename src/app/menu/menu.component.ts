import { Component } from "@angular/core";
import { StorageService } from "../storage.service";
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
    })
    export class MenuComponent {
        isMobileMenuOpen = false;
        isUserMenuOpen = false;
        constructor(private storageService: StorageService) {}
      
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
   