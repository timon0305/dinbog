import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TalentComponent } from './wizard/talent/talent.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {  MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatButtonModule} from "@angular/material/button";
import {NgxDropzoneModule} from 'ngx-dropzone';
import {MatSelectModule} from '@angular/material/select';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    TalentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    CdkStepperModule,
    MatStepperModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxDropzoneModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule { }
