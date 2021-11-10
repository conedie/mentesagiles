import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { AdmisionesComponent } from './components/admisiones/admisiones.component';
import { MentesagilesComponent } from './components/mentesagiles/mentesagiles.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PagaenlineaComponent } from './components/pagaenlinea/pagaenlinea.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AuthGuard } from './services/auth.guard';
import { ProtegidaComponent } from './components/protegida/protegida.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'instalaciones', component: InstalacionesComponent},
  { path: 'admisiones', component: AdmisionesComponent},
  { path: 'mentesagiles', component: MentesagilesComponent},
  { path: 'pagaenlinea', component: PagaenlineaComponent},
  { path: 'administrador', component: AdministradorComponent, canActivate:[AuthGuard]},
  { path: '**', pathMatch: 'full', redirectTo: 'protegida'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
