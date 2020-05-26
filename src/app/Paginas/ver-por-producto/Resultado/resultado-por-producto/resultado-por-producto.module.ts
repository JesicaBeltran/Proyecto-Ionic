import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoPorProductoPageRoutingModule } from './resultado-por-producto-routing.module';

import { ResultadoPorProductoPage } from './resultado-por-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoPorProductoPageRoutingModule
  ],
  declarations: [ResultadoPorProductoPage]
})
export class ResultadoPorProductoPageModule {}
