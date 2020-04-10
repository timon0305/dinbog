import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallComponent } from './wall/wall.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [WallComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'wall',
            component: WallComponent
          }
        ]
      }
    ])
  ]
})
export class HomeModule { }
