import { Component } from '@angular/core';
import { GastoService } from '../gasto.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  facturaDatos = {
    ruc: '',
    valor: '',
    gasto: ''
  };

  constructor(private gastoService: GastoService) { }

  enviarFactura() {
    if (this.facturaDatos.ruc && this.facturaDatos.valor && this.facturaDatos.gasto) {
      this.gastoService.agregarFactura(this.facturaDatos).subscribe({
        next: response => {
          console.log('Factura enviada', response);
          // Resetea el formulario después de enviarlo
          this.facturaDatos = {
            ruc: '',
            valor: '',
            gasto: ''
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
  }





