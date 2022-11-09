import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';
import { DirectoryComponent } from 'src/app/components/directory/directory.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: "", component: DirectoryComponent, canActivate: [AuthGuard] }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectoryRoutingModule { }
