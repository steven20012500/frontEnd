import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ImpuestoComponent } from './impuesto/impuesto.component';
import { InformacionComponent } from './informacion/informacion.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ReporteFormularioComponent } from './reporte-formulario/reporte-formulario.component';
import { UserReporteComponent } from './user-reporte/user-reporte.component';
import { IngresarUsuariosComponent } from './ingresar-usuarios/ingresar-usuarios.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { EmpleadoComponent } from './empleado/empleado.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'impuesto', component: ImpuestoComponent, canActivate : [authGuard] },
  { path: 'informacion', component: InformacionComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'reporte', component: ReporteComponent },
  { path: 'reporte-formulario', component: ReporteFormularioComponent },
  { path: 'user-reporte', component: UserReporteComponent },
  { path: 'ingresarUser', component: IngresarUsuariosComponent, canActivate : [authGuard] },
  { path: 'registroEmpleado', component: EmpleadoComponent },

  { path: 'login', component: LoginComponent },


  { path: '', redirectTo: '/galeria', pathMatch: 'full' } // Redirige al informacion por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
