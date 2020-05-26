import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPorSupermercadoPageRoutingModule } from './ver-por-supermercado-routing.module';

import { VerPorSupermercadoPage } from './ver-por-supermercado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPorSupermercadoPageRoutingModule
  ],
  declarations: [VerPorSupermercadoPage]
})
export class VerPorSupermercadoPageModule {}
