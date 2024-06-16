import { Component } from '@angular/core';
import { GastoService } from '../gasto.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  facturaDatos = {
    cedula: '',
    ingreso:'' ,
    salud:'',
    educacion:'',
    vestimenta:'',
    vivienda:'',
    alimentacion:'',
  };
  facturas: any[] = [];
  ingresos: any = 0.0;
  constructor(private gastoService: GastoService) { }

  enviarFactura() {
    if (this.facturaDatos.cedula && this.facturaDatos.ingreso && this.facturaDatos.salud && this.facturaDatos.educacion
      && this.facturaDatos.vestimenta && this.facturaDatos.vivienda && this.facturaDatos.alimentacion) {
      this.gastoService.agregarFactura(this.facturaDatos).subscribe({
        next: response => {
          console.log('Factura enviada', response);
          // Resetea el formulario después de enviarlo
          this.facturaDatos = {
            cedula: '',
            ingreso:'' ,
            salud:'',
            educacion:'',
            vestimenta:'',
            vivienda:'',
            alimentacion:'',
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
obtenerFacturas() {
  this.gastoService.obtenerDatos().subscribe({
    next: data => {
      this.facturas = data;
    },
    error: error => {
      console.error('Error al obtener las facturas', error);
    }
  });
  }
  realizarFuncionesConDatos() : any {
    // Ejemplo: Calcular el total de todas las facturas
    const total = this.facturas.reduce((sum, factura) => sum + parseFloat(factura.valor), 0);
    console.log('Total de todas las facturas:', total);

    // Ejemplo: Contar el número de facturas por tipo de gasto
    const conteoPorGasto = this.facturas.reduce((conteo, factura) => {
      conteo[factura.gasto] = (conteo[factura.gasto] || 0) + 1;
      return conteo;
    });
    console.log('Conteo de facturas por tipo de gasto:', conteoPorGasto);
  }
  calculoImpuestos()  {
    this.ingresos = parseFloat(this.facturaDatos.salud)+ parseFloat(this.facturaDatos.educacion)+ parseFloat(this.facturaDatos.vestimenta)
    + parseFloat(this.facturaDatos.vivienda)+ parseFloat(this.facturaDatos.alimentacion) || 0;

    let baseImponible = parseFloat(this.facturaDatos.ingreso) - this.ingresos;
    console.log('Total de todos los gastos: ', this.ingresos);
    let IR = 0;
    if(baseImponible <= 11722){
      let excedente = baseImponible - 0;
      let valorExcedente = excedente;
       IR = 0 +valorExcedente;  
    } 
     if(baseImponible>11722 && baseImponible<=14930){
      let excedente = baseImponible - 11722;
      let valorExcedente = excedente * 0.05;
       IR = 0 +valorExcedente;  

    }   
    if(baseImponible>14930 && baseImponible<=19385){
      let excedente = baseImponible - 14930;
      let valorExcedente = excedente * 0.1;
       IR = 160 +valorExcedente;  
    }   
    if(baseImponible>19385 && baseImponible <= 25638 ){
      let excedente = baseImponible - 19385;
      let valorExcedente = excedente * 0.12;
       IR = 606 +valorExcedente;
    }
    if(baseImponible>25638 && baseImponible <= 33738 ){
      let excedente = baseImponible - 25638;
      let valorExcedente = excedente * 0.15;
       IR = 1356 +valorExcedente;
    }
    if(baseImponible>33738 && baseImponible <= 44721 ){
      let excedente = baseImponible - 33738;
      let valorExcedente = excedente * 0.20;
       IR = 2571 +valorExcedente;
    }
    if(baseImponible>44721 && baseImponible <= 59537 ){
      let excedente = baseImponible - 44721;
      let valorExcedente = excedente * 0.25;
       IR = 4768 +valorExcedente;
    }
    if(baseImponible>59537 && baseImponible <= 79388 ){
      let excedente = baseImponible - 59537;
      let valorExcedente = excedente * 0.30;
       IR = 8472 +valorExcedente;
    }
    if(baseImponible>79388 && baseImponible <= 105580 ){
      let excedente = baseImponible - 79388;
      let valorExcedente = excedente * 0.35;
       IR = 14427 +valorExcedente;
    }
    if(baseImponible>105580 ){
      let excedente = baseImponible - 105580;
      let valorExcedente = excedente * 0.37;
       IR = 23594 +valorExcedente;
    }

    console.log("IR",IR);
  }
}




