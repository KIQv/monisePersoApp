import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pg/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pesquisa',
    loadChildren: () => import('./pg/pesquisa/pesquisa.module').then( m => m.PesquisaPageModule)
  },
  {
    path: 'notificacao',
    loadChildren: () => import('./pg/notificacao/notificacao.module').then( m => m.NotificacaoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pg/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pg/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pg/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pg/perfil/perfil.module').then( m => m.PerfilPageModule)
  },  {
    path: 'lista-produto',
    loadChildren: () => import('./pg/lista-produto/lista-produto.module').then( m => m.ListaProdutoPageModule)
  },
  {
    path: 'detalhe',
    loadChildren: () => import('./pg/detalhe/detalhe.module').then( m => m.DetalhePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
