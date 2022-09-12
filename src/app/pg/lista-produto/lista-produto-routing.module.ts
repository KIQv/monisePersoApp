import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaProdutoPage } from './lista-produto.page';

const routes: Routes = [
  {
    path: '',
    component: ListaProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaProdutoPageRoutingModule {}
