import { Component, OnInit } from '@angular/core';
import { Empleados } from '../class/empleados';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent implements OnInit{
  empleados: Empleados = {
    _id: '',
    nombre: '',
    cargo: '',
    departamento: '',
    sueldo: 0
 };
 empleado: Empleados[] = [];

/*
 obtenerEmpleados(): void {
  this.empleadoService.obtenerEmpleados().subscribe(data => {
    this.empleado = data;
  });
}*/
 constructor(private empleadoService: EmpleadoService) { }

 ngOnInit(): void {
 
  this.empleadoService.obtenerEmpleados().subscribe((empleado: Empleados[]) => {
    this.empleado = empleado.map(empleado => ({ ...empleado}));
  });
  //this.obtenerEmpleados();
}
 ingresarEmpleado() {
       //ejecutar impuestos
     this.empleadoService.agregarEmpleado(this.empleados).subscribe({
       next: response => {
         console.log('Empleado enviado', response);
         window.location.reload();
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
  eliminarEmpleado(id: string) {
    this.empleadoService.deleteEmpleado(id).subscribe({
      next: response => {
        console.log('Empleado eliminado', response);
        window.location.reload();
      },
      error: error => {
        console.error('Error al eliminar empleado', error);
      },
      complete: () => {
        console.log('Solicitud completada');
      }
    });
  }
}
