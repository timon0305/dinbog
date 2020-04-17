import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {Ng5SliderModule} from 'ng5-slider';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SignVerifyComponent } from './sign-verify/sign-verify.component';
import {TalentCategoryComponent} from './talent-category/talent-category.component';
import { FirstStepComponent } from './talent/first-step/first-step.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SecondStepComponent } from './talent/second-step/second-step.component';
import { ThirdStepComponent } from './talent/third-step/third-step.component';
import { ForthStepComponent } from './talent/forth-step/forth-step.component';
import { FifthStepComponent } from './talent/fifth-step/fifth-step.component';
import { SuccessTalentComponent } from './success-talent/success-talent.component';


@NgModule({
  declarations: [
    SignUpComponent,
    SignVerifyComponent,
    TalentCategoryComponent,
    TalentComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    ForthStepComponent,
    FifthStepComponent,
    SuccessTalentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    ScrollingModule,
    Ng5SliderModule,
    FlexLayoutModule,

    MatFormFieldModule,
    MatCheckboxModule,
    MatStepperModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
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
          },
          {
            path: 'talent',
            component: TalentComponent
          },
          {
            path: 'success-talent',
            component: SuccessTalentComponent
          }
        ]
      },
    ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class WizardModule { }
