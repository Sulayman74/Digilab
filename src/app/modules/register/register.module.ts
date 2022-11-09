import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { ResponseModalComponent } from 'src/app/modals/response-modal/response-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RegisterComponent,
    ResponseModalComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
