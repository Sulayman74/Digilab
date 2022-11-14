import { DirectoryComponent } from 'src/app/components/directory/directory.component';
import { DirectoryRoutingModule } from './directory-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DirectoryComponent],
  imports: [
    DirectoryRoutingModule,
    SharedModule
  ]
})
export class DirectoryModule { }
