import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { OverViewComponent } from 'src/app/components/over-view/over-view.component';
import { ProfileComponent } from './../../components/profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { SideBarLeftComponent } from 'src/app/components/side-bar-left/side-bar-left.component';
import { SideBarRightComponent } from 'src/app/components/side-bar-right/side-bar-right.component';

@NgModule({
  declarations: [
    OverViewComponent,
    SideBarLeftComponent,
    NavBarComponent,
    SideBarRightComponent,
    ProfileComponent
  ],
  imports: [
    SharedModule,

  ]
})
export class OverviewModule { }
