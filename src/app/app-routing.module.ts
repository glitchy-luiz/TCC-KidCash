import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'metas',
    loadChildren: () => import('./pages/metas/metas.module').then( m => m.MetasPageModule)
  },
  {
    path: 'gastos',
    loadChildren: () => import('./pages/gastos/gastos.module').then( m => m.GastosPageModule)
  },
  {
    path: 'deveres',
    loadChildren: () => import('./pages/deveres/deveres.module').then( m => m.DeveresPageModule)
  },
  {
    path: 'ganhos',
    loadChildren: () => import('./pages/ganhos/ganhos.module').then( m => m.GanhosPageModule)
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'tipofamilia',
    loadChildren: () => import('./pages/tipofamilia/tipofamilia.module').then( m => m.TipofamiliaPageModule)
  },
  {
    path: 'iniciokid',
    loadChildren: () => import('./pages/iniciokid/iniciokid.module').then( m => m.IniciokidPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
