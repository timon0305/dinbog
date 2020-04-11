import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallComponent } from './wall/wall.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {MatMenuModule} from '@angular/material/menu';
import {ModelComponent} from './wall/model/model.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { AdvancedSearchComponent } from './wall/advanced-search/advanced-search.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {StoriesComponent} from './wall/stories/stories.component';
import { RecommendComponent } from './wall/recommend/recommend.component';
import { LastReviewComponent } from './wall/last-review/last-review.component';
import { SponsersComponent } from './wall/sponsers/sponsers.component';
import { TopComponent } from './wall/top/top.component';


@NgModule({
  declarations: [
    WallComponent,
    ModelComponent,
    AdvancedSearchComponent,
    StoriesComponent,
    RecommendComponent,
    LastReviewComponent,
    SponsersComponent,
    TopComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
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
