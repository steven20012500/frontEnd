import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Formulario} from './gasto/gasto.component';
import { Gasto } from './gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private apiUrl = 'http://localhost:3000/api/agregarFactura'; // URL al archivo JSON
  private apiUrl4= 'http://localhost:3000/api-menu/ingresarImpuestos'

  private apiUrl1 = 'http://localhost:3000/api/obtenerDatos'; // URL al archivo JSON
  private apiUrl2 = 'http://localhost:3000/api/agregarFormulario'
  private apiUrl3 = 'http://localhost:3000/api/facturas'
  private apiUrl5 = 'http://localhost:3000/api-menu/obtenerImpuestos'; // URL al archivo JSON

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

  ingresarImpuestos(impuestosData: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(this.apiUrl4, impuestosData, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          console.error('Acceso prohibido:', error.statusText); // Loguea el mensaje de estado
          return throwError('Acceso prohibido'); // Maneja el error específico aquí
        } else {
          // Para otros errores, puedes manejarlos de otra manera o lanzarlos nuevamente
          return throwError(error);
        }
      })
    );
  }
  obtenerImpuestos(): Observable<any> {
    return this.http.get<Gasto[]>(this.apiUrl5);
  }
}
