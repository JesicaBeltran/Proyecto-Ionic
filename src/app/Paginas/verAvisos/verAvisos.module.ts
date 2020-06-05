import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerExistenciasPageRoutingModule } from './verAvisos-routing.module';

import { VerExistenciasPage } from './verAvisos.page';

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
