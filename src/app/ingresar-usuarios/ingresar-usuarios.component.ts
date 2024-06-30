import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../class/user';

@Component({
  selector: 'app-ingresar-usuarios',
  templateUrl: './ingresar-usuarios.component.html',
  styleUrl: './ingresar-usuarios.component.css'
})
export class IngresarUsuariosComponent {
  usuarios: User = {
    _id: '',
    cedula: '',
    password: '',
 };
 constructor(private userService: UserService) { }
 ingresarUser() {
       //ejecutar impuestos
     this.userService.agregarUser(this.usuarios).subscribe({
       next: response => {
         console.log('Usuario enviado', response);
         this.usuarios = {
          _id: '',
          cedula: '',
          password: '',
       };
       },
       error: error => {
         console.error('Error al enviar usuario', error);
       },
       complete: () => {
         console.log('Solicitud completada');
       }
     });
}
}
