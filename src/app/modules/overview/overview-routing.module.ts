import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';
import { ChatComponent } from 'src/app/components/chat/chat.component';
import { DirectoryComponent } from 'src/app/components/directory/directory.component';
import { NgModule } from '@angular/core';
import { OverViewComponent } from './../../components/over-view/over-view.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';

const routes: Routes = [{
  path: "", component: OverViewComponent,
  canActivate: [AuthGuard],
  children: [
    { path: "directory", component: DirectoryComponent },
    { path: "chat", component: ChatComponent, canActivate: [AuthGuard] },
    { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
