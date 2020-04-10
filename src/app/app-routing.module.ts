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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
