import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoArticulosComponent } from './listado-articulos/listado-articulos.component';

const routes: Routes = [
  {
    path: '' ,  component: ListadoArticulosComponent
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
