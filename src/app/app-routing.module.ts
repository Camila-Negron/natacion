import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PiscinaComponent } from './piscina/piscina.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'inicio',component:InicioComponent},
  {path:'piscina',component:PiscinaComponent},
  {path:'objetivo',component:ObjetivoComponent},


  {path:'**',redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
