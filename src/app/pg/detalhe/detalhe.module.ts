import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhePageRoutingModule } from './detalhe-routing.module';

import { DetalhePage } from './detalhe.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    DetalhePageRoutingModule
  ],
  declarations: [DetalhePage]
})
export class DetalhePageModule {}
