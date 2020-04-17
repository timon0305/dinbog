import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import {RouterModule} from '@angular/router';
import {TalentComponent} from './talent/talent.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {MdePopoverModule} from '@material-extended/mde';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {Ng5SliderModule} from 'ng5-slider';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SignVerifyComponent } from './sign-verify/sign-verify.component';
import {TalentCategoryComponent} from './talent-category/talent-category.component';


@NgModule({
  declarations: [WizardComponent, SignUpComponent, SignVerifyComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ScrollingModule,
    Ng5SliderModule,
    FlexLayoutModule,

    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatExpansionModule,
    MatTooltipModule,
    MatGridListModule,
    MatTabsModule,
    FontAwesomeModule,
    NgxDropzoneModule,
    MdePopoverModule,
    MatCheckboxModule,

    RouterModule.forChild([
      {
        path: '',
        component: WizardComponent,
        children: [
          {
            path: 'sign_up',
            component: SignUpComponent
          },
          {
            path: 'verify',
            component: SignVerifyComponent
          },
          {
            path: 'category',
            component: TalentCategoryComponent
          }
        ]
      },
      {
        path: 'talent',
        component: TalentComponent
      }
    ])
  ]
})
export class WizardModule { }
