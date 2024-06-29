import { Component, OnInit } from '@angular/core';
import { Formulario, Gasto } from '../gasto/gasto.component';
import { GastoService } from '../services/gasto.service';

@Component({
  selector: 'app-reporte-formulario',
  templateUrl: './reporte-formulario.component.html',
  styleUrl: './reporte-formulario.component.css'
})

export class ReporteFormularioComponent implements OnInit {
  ngOnInit(): void {
  }
  facturas: Formulario[]=[];
    constructor(private gastoService:GastoService){
    this.gastoService.obtenerDatosFactura().subscribe(data =>
      {
        this.facturas=data;
        console.log(data);
      });
    }
}
