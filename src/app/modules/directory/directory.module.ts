import { DirectoryComponent } from 'src/app/components/directory/directory.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DirectoryComponent],
  imports: [
    SharedModule
  ]
})
export class DirectoryModule { }
