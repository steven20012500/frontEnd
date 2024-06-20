import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../users/users.component';

@Component({
  selector: 'app-user-reporte',
  templateUrl: './user-reporte.component.html',
  styleUrl: './user-reporte.component.css'
})
export class UserReporteComponent {
  ngOnInit(): void {
  }
  usuarios: User[]=[];
    constructor(private userService:UserService){
    this.userService.obtenerDatosUser().subscribe(data =>
      {
        this.usuarios=data;
        console.log(data);
      });
    }
}
