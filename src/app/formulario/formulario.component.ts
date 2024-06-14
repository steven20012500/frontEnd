import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  ngOnInit():void {}
  ruc:string='99999999001';
  valor:number=0.0;;
  gasto:string='Ninguno';
  constructor(private dataService: DataService) {}

  onSubmit() {
    const datos = {
      ruc: this.ruc,
      valor: this.valor,
      gasto: this.gasto
    };
    this.dataService.agregarFactura(datos).subscribe(
      response => {
        console.log('Datos enviados al servidor:', response);
      },
      error => {
        console.error('Error al enviar datos al servidor:', error);
      }
    );



    function gastos(a: number, b: number): number {
      return a + b;
  }
  }












}
