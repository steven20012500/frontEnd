import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GaleriaComponent } from './galeria/galeria.component'; 
import { InformacionComponent } from './informacion/informacion.component';
import { FormularioComponent } from './formulario/formulario.component'; 
import { DataService} from './data.service'; 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GaleriaComponent,
    InformacionComponent,
    FormularioComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
