import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ImpuestoComponent } from './impuesto/impuesto.component';
import { InformacionComponent } from './informacion/informacion.component';
import { GaleriaComponent } from './galeria/galeria.component';


const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'impuesto', component: ImpuestoComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: '', redirectTo: '/galeria', pathMatch: 'full' } // Redirige al informacion por defecto

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
