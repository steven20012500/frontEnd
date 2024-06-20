import { Component } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../gasto/gasto.component';
@Component({
  selector: 'app-impuesto',
  templateUrl: './impuesto.component.html',
  styleUrl: './impuesto.component.css'
})
export class ImpuestoComponent {
  maximosGastos = {
    salud: 3809.65,
    educacion: 3809.65,
    vestimenta: 3809.65,
    vivienda: 3809.65,
    alimentacion: 3809.65,
    totalMaximo: 15238.60
  };
  facturaDatos: Gasto = {
    cedula: '',
    ingreso: 0,
    salud: 0,
    educacion: 0,
    vestimenta: 0,
    vivienda: 0,
    alimentacion: 0,
    baseImponible: 0,
    excedente: 0,
    valorExcedente: 0,
    IR: 0
  };
  onInit(){
    this.calculoImpuestos();
  }
  constructor(private gastoService: GastoService) { }
  enviarFactura() {
    if (this.facturaDatos.cedula && this.facturaDatos.ingreso !== null && this.facturaDatos.salud !== null &&
     this.facturaDatos.educacion !== null && this.facturaDatos.vestimenta !== null &&
      this.facturaDatos.vivienda !== null && this.facturaDatos.alimentacion !== null)  {
        //ejecutar impuestos
        this.calculoImpuestos();
      this.gastoService.agregarFactura(this.facturaDatos).subscribe({
        next: response => {
          console.log('Factura enviada', response);
          // Resetea el formulario después de enviarlo
          this.facturaDatos = {
            cedula: '',
            ingreso: 0 ,
            salud: 0,
            educacion: 0,
            vestimenta: 0,
            vivienda: 0,
            alimentacion: 0,
            baseImponible: 0,
            excedente: 0,
            valorExcedente: 0,
            IR: 0
          };
        },
        error: error => {
          console.error('Error al enviar la factura', error);
        },
        complete: () => {
          console.log('Solicitud completada');
        }
      });
    } else {
      alert('Por favor complete todos los campos');
  }
}

  calculoImpuestos()  {
    const salud = this.facturaDatos.salud;
    const educacion = this.facturaDatos.educacion;
    const vestimenta = this.facturaDatos.vestimenta;
    const vivienda = this.facturaDatos.vivienda;
    const alimentacion = this.facturaDatos.alimentacion;
    const ingreso = this.facturaDatos.ingreso;
    const totalGastos = salud + educacion + vestimenta + vivienda + alimentacion;
    this.facturaDatos.baseImponible = (ingreso - totalGastos);
    let baseImponible = this.facturaDatos.baseImponible;
    let IR = 0;
    let excedente= 0;
    let valorExcedente =0;
    if( baseImponible <= 11722){
       excedente = baseImponible - 0;
       valorExcedente = excedente;
       IR = 0 +valorExcedente;  
    } 
    else if(baseImponible>11722 && baseImponible<=14930){
       excedente = baseImponible - 11722;
       valorExcedente = excedente * 0.05;
       IR = 0 +valorExcedente;  

    }   
    else if(baseImponible>14930 && baseImponible<=19385){
       excedente = baseImponible - 14930;
       valorExcedente = excedente * 0.1;
       IR = 160 +valorExcedente;  
    }   
    else if(baseImponible>19385 && baseImponible <= 25638 ){
       excedente = baseImponible - 19385;
       valorExcedente = excedente * 0.12;
       IR = 606 +valorExcedente;
    }
    else if(baseImponible>25638 && baseImponible <= 33738 ){
       excedente = baseImponible - 25638;
       valorExcedente = excedente * 0.15;
       IR = 1356 +valorExcedente;
    }
    else if(baseImponible>33738 && baseImponible <= 44721 ){
       excedente = baseImponible - 33738;
       valorExcedente = excedente * 0.20;
       IR = 2571 +valorExcedente;
    }
    else  if(baseImponible>44721 && baseImponible <= 59537 ){
       excedente = baseImponible - 44721;
       valorExcedente = excedente * 0.25;
       IR = 4768 +valorExcedente;
    }
    else if(baseImponible>59537 && baseImponible <= 79388 ){
       excedente = baseImponible - 59537;
       valorExcedente = excedente * 0.30;
       IR = 8472 +valorExcedente;
    }
    else  if(baseImponible>79388 && baseImponible <= 105580 ){
       excedente = baseImponible - 79388;
       valorExcedente = excedente * 0.35;
       IR = 14427 +valorExcedente;
    }
    else  if(baseImponible>105580 ){
       excedente = baseImponible - 105580;
       valorExcedente = excedente * 0.37;
       IR = 23594 +valorExcedente;
    }
    this.facturaDatos.excedente = excedente;
    this.facturaDatos.valorExcedente = valorExcedente;
    this.facturaDatos.IR = IR;
    console.log("IR",IR);
  }

  gastosTotales() : number{
    const salud = this.facturaDatos.salud;
    const educacion = this.facturaDatos.educacion;
    const vestimenta = this.facturaDatos.vestimenta;
    const vivienda = this.facturaDatos.vivienda;
    const alimentacion = this.facturaDatos.alimentacion;
    const valorPorDefecto = 0;
    let gastosTotales = salud + educacion + vestimenta + vivienda + alimentacion;
   
    if(gastosTotales >this.maximosGastos.totalMaximo ){
      alert(`El valor máximo para los gastos es ${this.maximosGastos.totalMaximo}`);
      this.facturaDatos.alimentacion = valorPorDefecto;
    }
    return gastosTotales;
  }
  
  validarGasto(gasto: string) {
    const salud = this.facturaDatos.salud;
    const educacion = this.facturaDatos.educacion;
    const vestimenta = this.facturaDatos.vestimenta;
    const vivienda = this.facturaDatos.vivienda;
    const alimentacion = this.facturaDatos.alimentacion;
    const totalGastos = salud + educacion + vestimenta + vivienda + alimentacion;
    if(totalGastos > this.facturaDatos.ingreso){
      alert(`El valor total de los gastos es ${totalGastos}$ no puede superar los ingresos${this.facturaDatos.ingreso}$`);
      this.facturaDatos.salud = 0;
      this.facturaDatos.educacion = 0;
      this.facturaDatos.vestimenta = 0;
      this.facturaDatos.vivienda = 0;
      this.facturaDatos.alimentacion = 0;
    }
    else{
    if (salud > this.maximosGastos.salud) {
      this.facturaDatos.salud= this.maximosGastos.salud;
      alert(`El valor máximo para ${gasto} es ${this.maximosGastos.salud}`);
    }
    else if (educacion > this.maximosGastos.educacion) {
      this.facturaDatos.educacion= this.maximosGastos.educacion;
      alert(`El valor máximo para ${gasto} es ${this.maximosGastos.educacion}`);
    }
    else if (vestimenta > this.maximosGastos.vestimenta) {
      this.facturaDatos.vestimenta= this.maximosGastos.vestimenta;
      alert(`El valor máximo para ${gasto} es ${this.maximosGastos.vestimenta}`);
    }
    else if (vivienda > this.maximosGastos.vivienda) {
      this.facturaDatos.vivienda= this.maximosGastos.vivienda;
      alert(`El valor máximo para ${gasto} es ${this.maximosGastos.vivienda}`);
    }
    else if (alimentacion > this.maximosGastos.alimentacion) {
      this.facturaDatos.alimentacion= this.maximosGastos.alimentacion;
      alert(`El valor máximo para ${gasto} es ${this.maximosGastos.alimentacion}`);
    }
  }
}
}
