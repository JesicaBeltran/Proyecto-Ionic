import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerExistenciasPageRoutingModule } from './ver-existencias-routing.module';

import { VerExistenciasPage } from './ver-existencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerExistenciasPageRoutingModule
  ],
  declarations: [VerExistenciasPage]
})
export class VerExistenciasPageModule {}
