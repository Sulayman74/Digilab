import { NgModule } from '@angular/core';
import { OverviewRoutingModule } from './../overview/overview-routing.module';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    OverviewRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
