import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoPorProductoPage } from './resultado-por-producto.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoPorProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoPorProductoPageRoutingModule {}
