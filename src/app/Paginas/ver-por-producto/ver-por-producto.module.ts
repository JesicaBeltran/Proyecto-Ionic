import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPorProductoPageRoutingModule } from './ver-por-producto-routing.module';

import { VerPorProductoPage } from './ver-por-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPorProductoPageRoutingModule
  ],
  declarations: [VerPorProductoPage]
})
export class VerPorProductoPageModule {}
