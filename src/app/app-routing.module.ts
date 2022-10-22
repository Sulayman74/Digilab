import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './components/chat/chat.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { OverViewComponent } from './components/over-view/over-view.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  
  {path:"", component :LoginComponent},
  {path:"login", component :LoginComponent},
  {path:"register", component :RegisterComponent},
  {path:"overview", component :OverViewComponent, 
  children:[
    {path:"directory", component: DirectoryComponent},
    {path: "chat", component: ChatComponent},
    {path: "profile", component: ProfileComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
