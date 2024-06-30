import { Component, OnInit } from '@angular/core';
import { GastoService } from '../services/gasto.service';
import { UserService } from '../services/user.service';
import { Gasto } from '../class/gasto';
import { User } from '../class/user';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  gastos: Array<{ gasto: Gasto, cedula: string }> = [];
  error: string | null = null;

  constructor(
    private gastoService: GastoService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.gastoService.obtenerImpuestos().subscribe({
      next: (data) => {
        this.gastos = [];
        data.forEach((gasto: Gasto) => {
          this.userService.getCedulaById(gasto.user).subscribe({
            next: (response) => {
              this.gastos.push({ gasto, cedula: response.cedula });
              this.error = null;
            },
            error: (err) => {
              this.error = `Error al obtener la cédula para el usuario ${gasto.user}`;
              console.error('Error:', err);
            }
          });
        });
      },
      error: (err) => {
        this.error = 'Error al obtener los datos de impuestos';
        console.error('Error:', err);
      }
    });
  }
}
