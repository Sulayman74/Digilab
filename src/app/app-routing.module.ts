import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { ChatComponent } from './components/chat/chat.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { FinderComponent } from './components/finder/finder.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { OverViewComponent } from './components/over-view/over-view.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "finder", component: FinderComponent, canActivate:[AuthGuard] },
  {
    path: "overview", component: OverViewComponent,
    canActivate:[AuthGuard],
    children: [
      { path: "directory", component: DirectoryComponent, canActivate:[AuthGuard] },
      { path: "chat", component: ChatComponent, canActivate:[AuthGuard] },
      { path: "profile", component: ProfileComponent, canActivate:[AuthGuard] },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
