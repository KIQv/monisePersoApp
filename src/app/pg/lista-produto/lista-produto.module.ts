import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProdutoPageRoutingModule } from './lista-produto-routing.module';

import { ListaProdutoPage } from './lista-produto.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ListaProdutoPageRoutingModule
  ],
  declarations: [ListaProdutoPage]
})
export class ListaProdutoPageModule {}
