import { Component } from '@angular/core';
import { GastoService } from './gasto.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  facturaDatos = {
    ruc: '',
    valor: 0,
    gasto: ''
  };

  constructor(private gastoService: GastoService) { }

  enviarFactura() {
    if (this.facturaDatos.ruc && this.facturaDatos.valor && this.facturaDatos.gasto) {
      this.gastoService.agregarFactura(this.facturaDatos).subscribe(response => {
        console.log('Factura enviada', response);
        // Resetea el formulario después de enviarlo
        this.facturaDatos = {
          ruc: '1',
          valor: 4,
          gasto: '4'
        };
      }, error => {
        console.error('Error al enviar la factura', error);
      });
    } else {
      alert('Por favor complete todos los campos');
    }
  }
}
