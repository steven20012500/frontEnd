import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
//import { HttpClientModule } from '@angular/common/http'; // Importar las dependencias necesarias
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importa withFetch
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GaleriaComponent } from './galeria/galeria.component'; 
import { InformacionComponent } from './informacion/informacion.component';
import { FormularioComponent } from './formulario/formulario.component'; 
import { ImpuestoComponent } from './impuesto/impuesto.component';
import { GastoComponent } from './gasto/gasto.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ReporteFormularioComponent } from './reporte-formulario/reporte-formulario.component';
import { UsersComponent } from './users/users.component';
import { UserReporteComponent } from './user-reporte/user-reporte.component';
import { IngresarUsuariosComponent } from './ingresar-usuarios/ingresar-usuarios.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GaleriaComponent,
    InformacionComponent,
    FormularioComponent,
    ImpuestoComponent,
    GastoComponent,
    ReporteComponent,
    ReporteFormularioComponent,
    UsersComponent,
    UserReporteComponent,
    IngresarUsuariosComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //HttpClientModule
  ],
  providers: [
   // provideClientHydration(),
   provideHttpClient(withFetch()) // Configura HttpClient para usar fetch

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
