import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerPorProductoPage } from './ver-por-producto.page';

const routes: Routes = [
  {
    path: '',
    component: VerPorProductoPage
  },
  {
    path: 'resultado-por-producto',
    loadChildren: () => import('../../Paginas/ver-por-producto/Resultado/resultado-por-producto/resultado-por-producto.module').then( m => m.ResultadoPorProductoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerPorProductoPageRoutingModule {}
