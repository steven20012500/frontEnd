import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formulario, Gasto } from './gasto/gasto.component';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private apiUrl = 'http://localhost:3000/api/agregarFactura'; // URL al archivo JSON

  private apiUrl1 = 'http://localhost:3000/api/obtenerDatos'; // URL al archivo JSON
  private apiUrl2 = 'http://localhost:3000/api/agregarFormulario'
  private apiUrl3 = 'http://localhost:3000/api/facturas'

  constructor(private http: HttpClient) { }
  
  agregarFactura(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos);
  }
  
  agregarFormulario(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl2, datos);
  }
  obtenerDatos(): Observable<any>{
    return this.http.get<Gasto[]>(this.apiUrl1);
  }
  obtenerDatosFactura(): Observable<any>{
    return this.http.get<Formulario[]>(this.apiUrl3);
  }
}
