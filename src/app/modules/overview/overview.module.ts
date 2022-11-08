import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { OverViewComponent } from 'src/app/components/over-view/over-view.component';
import { SideBarLeftComponent } from 'src/app/components/side-bar-left/side-bar-left.component';
import { SideBarRightComponent } from 'src/app/components/side-bar-right/side-bar-right.component';
import { UserComponent } from 'src/app/components/user/user.component';

@NgModule({
  declarations: [OverViewComponent,
    UserComponent,
    SideBarLeftComponent,
    NavBarComponent,
    SideBarRightComponent,],
  imports: [
    CommonModule
  ]
})
export class OverviewModule { }
