import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'wizard/talent',
    pathMatch: 'full',
  },
  {
    path: 'wizard/talent',
    loadChildren: () => import('./wizard/talent/talent.module').then( m => m.TalentModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
