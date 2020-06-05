import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistenciasPageRoutingModule } from './crearAviso-routing.module';

import { ExistenciasPage } from './crearAviso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistenciasPageRoutingModule
  ],
  declarations: [ExistenciasPage]
})
export class ExistenciasPageModule {}
