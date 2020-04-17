import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'existencias',
    loadChildren: () => import('./existencias/existencias.module').then( m => m.ExistenciasPageModule)
  },
  {
    path: 'ver-existencias',
    loadChildren: () => import('./ver-existencias/ver-existencias.module').then( m => m.VerExistenciasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
