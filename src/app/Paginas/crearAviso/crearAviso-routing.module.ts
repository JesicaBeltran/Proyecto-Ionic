import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistenciasPage } from './crearAviso.page';

const routes: Routes = [
  {
    path: '',
    component: ExistenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExistenciasPageRoutingModule {}
