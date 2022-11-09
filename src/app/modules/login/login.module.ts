import { LoginComponent } from 'src/app/components/login/login.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule
  ]
})
export class LoginModule { }
