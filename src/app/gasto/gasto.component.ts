import { Component } from '@angular/core';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrl: './gasto.component.css'
})
export class GastoComponent {

}
export interface Gasto{
  "cedula": string,
  "ingreso": number ,
  "salud": number,
  "educacion":number,
  "vestimenta":number,
  "vivienda":number,
  "alimentacion":number,
  "baseImponible": number,
  "excedente": number,
  "valorExcedente": number,
  "IR": number
}

export interface Formulario{
  "ruc": string,
  "valor": number,
  "gasto": string
}