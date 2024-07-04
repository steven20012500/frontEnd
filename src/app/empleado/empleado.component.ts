import { Component } from '@angular/core';
import { Empleados } from '../class/empleados';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  empleados: Empleados = {
    _id: '',
    nombre: '',
    cargo: '',
    departamento: '',
    sueldo: 0
 };
 constructor(private empleadoService: EmpleadoService) { }
 ingresarEmpleado() {
       //ejecutar impuestos
     this.empleadoService.agregarEmpleado(this.empleados).subscribe({
       next: response => {
         console.log('Empleado enviado', response);
         this.empleados = {
          _id: '',
          nombre: '',
          cargo: '',
          departamento: '',
          sueldo: 0
       };
       },
       error: error => {
         console.error('Error al enviar empleado', error);
       },
       complete: () => {
         console.log('Solicitud completada');
       }
     });
}
}
