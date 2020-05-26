import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoPorSupermercadoPageRoutingModule } from './resultado-por-supermercado-routing.module';

import { ResultadoPorSupermercadoPage } from './resultado-por-supermercado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoPorSupermercadoPageRoutingModule
  ],
  declarations: [ResultadoPorSupermercadoPage]
})
export class ResultadoPorSupermercadoPageModule {}
