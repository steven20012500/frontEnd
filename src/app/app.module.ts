import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'; // Importar las dependencias necesarias
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GaleriaComponent } from './galeria/galeria.component'; 
import { InformacionComponent } from './informacion/informacion.component';
import { FormularioComponent } from './formulario/formulario.component'; 
import { GastoService} from './gasto.service';
import { ImpuestoComponent } from './impuesto/impuesto.component';
import { GastoComponent } from './gasto/gasto.component';
import { ReporteComponent } from './reporte/reporte.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GaleriaComponent,
    InformacionComponent,
    FormularioComponent,
    ImpuestoComponent,
    GastoComponent,
    ReporteComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   // provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
