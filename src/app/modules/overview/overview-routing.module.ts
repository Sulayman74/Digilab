import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { OverViewComponent } from './../../components/over-view/over-view.component';

const routes: Routes = [{ path: "", component: OverViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
