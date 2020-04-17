import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerExistenciasPage } from './ver-existencias.page';

const routes: Routes = [
  {
    path: '',
    component: VerExistenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerExistenciasPageRoutingModule {}
