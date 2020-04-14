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
import { MainContentComponent } from './wall/main-content/main-content.component';
import { LikesModalComponent } from './wall/main-content/likes-modal/likes-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SupportComponent } from './navbar/support/support.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { PostComponent } from './wall/main-content/post/post.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { SearchComponent } from './search/search.component';
import {AdvancedSearchComponent} from './wall/advanced-search/advanced-search.component';
import { SearchsideComponent } from './search/searchside/searchside.component';
import { FeatureSearchComponent } from './search/feature-search/feature-search.component';
import {Ng5SliderModule} from 'ng5-slider';
import {CdkTreeModule} from '@angular/cdk/tree';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {PortalModule} from '@angular/cdk/portal';
import {PlatformModule} from '@angular/cdk/platform';
import {OverlayModule} from '@angular/cdk/overlay';
import {ObserversModule} from '@angular/cdk/observers';
import {BidiModule} from '@angular/cdk/bidi';
import {A11yModule} from '@angular/cdk/a11y';
import { SearchMainComponent } from './search/search-main/search-main.component';
import { ContextualSearchComponent } from './contextual-search/contextual-search.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ContextualSearchTalentsComponent } from './contextual-search/contextual-search-talents/contextual-search-talents.component';
import { ContextualSearchAdvertiseComponent } from './contextual-search/contextual-search-advertise/contextual-search-advertise.component';
import { InvitationComponent } from './invitation/invitation.component';
import { InvitationModelComponent } from './invitation/invitation-model/invitation-model.component';
import { InvitationSocialLinkComponent } from './invitation/invitation-social-link/invitation-social-link.component';
import { InvitationAdvertiseComponent } from './invitation/invitation-advertise/invitation-advertise.component';
import { InvitationMainComponent } from './invitation/invitation-main/invitation-main.component';
import { InvitationPeopleGroupComponent } from './invitation/invitation-people-group/invitation-people-group.component';
import { InvitationManageAllComponent } from './invitation/invitation-manage-all/invitation-manage-all.component';

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
    MainContentComponent,
    LikesModalComponent,
    SupportComponent,
    PostComponent,
    SearchComponent,
    SearchsideComponent,
    FeatureSearchComponent,
    SearchMainComponent,
    ContextualSearchComponent,
    ContextualSearchTalentsComponent,
    ContextualSearchAdvertiseComponent,
    InvitationComponent,
    InvitationModelComponent,
    InvitationSocialLinkComponent,
    InvitationAdvertiseComponent,
    InvitationMainComponent,
    InvitationPeopleGroupComponent,
    InvitationManageAllComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ScrollingModule,
    Ng5SliderModule,

    //Material Module
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
    MatDialogModule,
    MatExpansionModule,
    MatTooltipModule,
    MatGridListModule,
    MatTabsModule,

    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'wall',
            component: WallComponent
          },
          {
            path: 'search',
            component: SearchComponent
          },
          {
            path: 'contextual_search',
            component: ContextualSearchComponent
          },
          {
            path: 'invitation',
            component: InvitationComponent
          },
          {
            path: 'invitation_manage_all',
            component: InvitationManageAllComponent
          }
        ],
      },

    ])
  ],
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule
    ],
  entryComponents: [LikesModalComponent, SupportComponent, PostComponent]
})
export class HomeModule { }
