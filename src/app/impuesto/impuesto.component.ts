import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { StorageService } from '../storage.service';
import { Gasto } from '../gasto';

@Component({
  selector: 'app-impuesto',
  templateUrl: './impuesto.component.html',
  styleUrls: ['./impuesto.component.css']
})
export class ImpuestoComponent implements OnInit {
  constructor(
    private gastoService: GastoService,
    private storageService: StorageService
  ) { }

  maximosGastos = {
    salud: 15238.60,
    educacion: 3809.65,
    vestimenta: 3809.65,
    vivienda: 3809.65,
    alimentacion: 3809.65,
    totalMaximo: 15238.60
  };

  impuestos: Gasto = {
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

  ngOnInit() {
    this.calculoImpuestos();
  }

  enviarImpuestos() {
    const token = this.storageService.getItem('token');
   
    if (!token) {
      console.error('Token de autenticación no encontrado.');
      return;
    }

    const { ingreso, salud, educacion, vestimenta, vivienda, alimentacion } = this.impuestos;
    if (ingreso !== null && salud !== null && educacion !== null && vestimenta !== null && vivienda !== null && alimentacion !== null) {
      this.calculoImpuestos();
      this.gastoService.ingresarImpuestos(this.impuestos, token).subscribe({
        next: response => {
          console.log('Factura enviada', response);
          this.resetForm();
        },
        error: error => {
          console.error('Error al enviar la factura', error);
          // Puedes agregar más detalles aquí
          console.error('Detalles del error:', error.message, error.status, error.url);
        },
        complete: () => {
          console.log('Solicitud completada');
        }
      });
    } else {
      alert('Por favor complete todos los campos');
    }
  }

  calculoImpuestos() {
    const { salud, educacion, vestimenta, vivienda, alimentacion, ingreso } = this.impuestos;
    const totalGastos = salud + educacion + vestimenta + vivienda + alimentacion;
    this.impuestos.baseImponible = ingreso - totalGastos;
    let { baseImponible } = this.impuestos;
    let IR = 0;
    let excedente = 0;
    let valorExcedente = 0;

    if (baseImponible <= 11722) {
      excedente = baseImponible - 0;
      valorExcedente = excedente * 0.0;
      IR = 0 + valorExcedente;
    } else if (baseImponible > 11722 && baseImponible <= 14930) {
      excedente = baseImponible - 11722;
      valorExcedente = excedente * 0.05;
      IR = 0 + valorExcedente;
    } else if (baseImponible > 14930 && baseImponible <= 19385) {
      excedente = baseImponible - 14930;
      valorExcedente = excedente * 0.1;
      IR = 160 + valorExcedente;
    } else if (baseImponible > 19385 && baseImponible <= 25638) {
      excedente = baseImponible - 19385;
      valorExcedente = excedente * 0.12;
      IR = 606 + valorExcedente;
    } else if (baseImponible > 25638 && baseImponible <= 33738) {
      excedente = baseImponible - 25638;
      valorExcedente = excedente * 0.15;
      IR = 1356 + valorExcedente;
    } else if (baseImponible > 33738 && baseImponible <= 44721) {
      excedente = baseImponible - 33738;
      valorExcedente = excedente * 0.2;
      IR = 2571 + valorExcedente;
    } else if (baseImponible > 44721 && baseImponible <= 59537) {
      excedente = baseImponible - 44721;
      valorExcedente = excedente * 0.25;
      IR = 4768 + valorExcedente;
    } else if (baseImponible > 59537 && baseImponible <= 79388) {
      excedente = baseImponible - 59537;
      valorExcedente = excedente * 0.3;
      IR = 8472 + valorExcedente;
    } else if (baseImponible > 79388 && baseImponible <= 105580) {
      excedente = baseImponible - 79388;
      valorExcedente = excedente * 0.35;
      IR = 14427 + valorExcedente;
    } else if (baseImponible > 105580) {
      excedente = baseImponible - 105580;
      valorExcedente = excedente * 0.37;
      IR = 23594 + valorExcedente;
    }

    this.impuestos.excedente = excedente;
    this.impuestos.valorExcedente = valorExcedente;
    this.impuestos.IR = IR;
    console.log("IR", IR);
  }

  gastosTotales(): number {
    const { salud, educacion, vestimenta, vivienda, alimentacion } = this.impuestos;
    let gastosTotales = salud + educacion + vestimenta + vivienda + alimentacion;
    if (gastosTotales > this.maximosGastos.totalMaximo) {
      alert(`El valor máximo para los gastos es ${this.maximosGastos.totalMaximo}`);
      this.impuestos.alimentacion = 0;
      this.impuestos.salud = 0;
    }
    return gastosTotales;
  }

  validarGasto(gasto: string) {
    const { salud, educacion, vestimenta, vivienda, alimentacion, ingreso } = this.impuestos;
    const totalGastos = salud + educacion + vestimenta + vivienda + alimentacion;

    if (totalGastos > ingreso) {
      alert(`El valor total de los gastos es ${totalGastos}$ no puede superar los ingresos ${ingreso}$`);
      this.impuestos.salud = 0;
      this.impuestos.educacion = 0;
      this.impuestos.vestimenta = 0;
      this.impuestos.vivienda = 0;
      this.impuestos.alimentacion = 0;
      return;
    }

    if (salud > this.maximosGastos.salud) {
      this.impuestos.salud = this.maximosGastos.salud;
      alert(`El valor máximo para ${gasto} es ${this.maximosGastos.salud}`);
    } else if (educacion > this.maximosGastos.educacion) {
      this.impuestos.educacion = this.maximosGastos.educacion;
      alert(`El valor máximo para ${gasto} es ${this.maximosGastos.educacion}`);
    } else if (vestimenta > this.maximosGastos.vestimenta) {
      this.impuestos.vestimenta = this.maximosGastos.vestimenta;
      alert(`El valor máximo para ${gasto} es ${this.maximosGastos.vestimenta}`);
    } else if (vivienda > this.maximosGastos.vivienda) {
      this.impuestos.vivienda = this.maximosGastos.vivienda;
      alert(`El valor máximo para ${gasto} es ${this.maximosGastos.vivienda}`);
    } else if (alimentacion > this.maximosGastos.alimentacion) {
      this.impuestos.alimentacion = this.maximosGastos.alimentacion;
      alert(`El valor máximo para ${gasto} es ${this.maximosGastos.alimentacion}`);
    }
  }

  private resetForm() {
    this.impuestos = {
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
  }
}
