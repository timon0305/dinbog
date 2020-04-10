import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {TalentComponent} from "./talent.component";
import { SuccessComponent } from './success/success.component';



@NgModule({
  declarations: [SuccessComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TalentComponent
      }
    ])
  ]
})
export class TalentModule { }
