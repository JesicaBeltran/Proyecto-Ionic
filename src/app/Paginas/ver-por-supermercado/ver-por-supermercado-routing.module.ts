import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerPorSupermercadoPage } from './ver-por-supermercado.page';

const routes: Routes = [
  {
    path: '',
    component: VerPorSupermercadoPage
  },
  {
    path: 'resultado-por-supermercado',
    loadChildren: () => import('../../Paginas/ver-por-supermercado/Resultado/resultado-por-supermercado/resultado-por-supermercado.module').then( m => m.ResultadoPorSupermercadoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerPorSupermercadoPageRoutingModule {}
