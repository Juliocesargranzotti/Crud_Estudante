import { EstudanteComponent } from './estudante/estudante.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'estudante', component: EstudanteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
