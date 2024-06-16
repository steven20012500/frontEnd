import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private apiUrl = 'http://localhost:3000/api/agregarFactura'; // URL al archivo JSON
  private apiUrl1 = 'http://localhost:3000/api/facturas'; // URL al archivo JSON

  constructor(private http: HttpClient) { }
  
  agregarFactura(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos);
  }
  
  obtenerDatos(): Observable<any>{
    return this.http.get<any>(this.apiUrl1);
  }
}
