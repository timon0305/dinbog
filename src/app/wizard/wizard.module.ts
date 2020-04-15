import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [WizardComponent],
  imports: [
    CommonModule,
    MatBadgeModule
  ]
})
export class WizardModule { }
