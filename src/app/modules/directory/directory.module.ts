import { CommonModule } from '@angular/common';
import { DirectoryComponent } from 'src/app/components/directory/directory.component';
import { DirectoryModalComponent } from 'src/app/modals/directory-modal/directory-modal.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DirectoryComponent],
  imports: [
    SharedModule
  ]
})
export class DirectoryModule { }
