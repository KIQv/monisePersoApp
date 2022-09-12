import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [ /* Classe Routes */
  {
    path: 'tabs/pg', /* Caminho pricipal*/
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pg/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'pesquisa',
        loadChildren: () => import('../pg/pesquisa/pesquisa.module').then(m => m.PesquisaPageModule)
      },
      {
        path: 'notificacao',
        loadChildren: () => import('../pg/notificacao/notificacao.module').then(m => m.NotificacaoPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pg/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'cadastro',
        loadChildren: () => import('../pg/cadastro/cadastro.module').then(m => m.CadastroPageModule)
      },
      {
        path: 'pesquisa',
        loadChildren: () => import('../pg/pesquisa/pesquisa.module').then(m => m.PesquisaPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../pg/perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../pg/inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'lista-produto',
        loadChildren: () => import('../pg/lista-produto/lista-produto.module').then(m => m.ListaProdutoPageModule)
      },
      {
        path: 'detalhe/:id',
        loadChildren: () => import('../pg/detalhe/detalhe.module').then(m => m.DetalhePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/pg/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pg/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
