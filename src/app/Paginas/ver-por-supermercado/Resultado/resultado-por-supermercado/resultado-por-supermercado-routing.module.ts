import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoPorSupermercadoPage } from './resultado-por-supermercado.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoPorSupermercadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoPorSupermercadoPageRoutingModule {}
