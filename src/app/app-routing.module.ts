import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: "login", loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: "register", loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
  { path: "finder", loadChildren: () => import('./modules/finder/finder.module').then(m => m.FinderModule) },
  { path: "overview", loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule) },
  { path: "chat", loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule) },
  { path: "directory", loadChildren: () => import('./modules/directory/directory.module').then(m => m.DirectoryModule) }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
