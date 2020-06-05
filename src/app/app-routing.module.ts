import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Paginas/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'crearAviso',
    loadChildren: () => import('./Paginas/crearAviso/crearAviso.module').then( m => m.ExistenciasPageModule)
  },
  {
    path: 'verAvisos',
    loadChildren: () => import('./Paginas/verAvisos/verAvisos.module').then( m => m.VerExistenciasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
