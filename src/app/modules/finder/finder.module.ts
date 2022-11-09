import { FinderComponent } from 'src/app/components/finder/finder.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FinderComponent],
  imports: [
    SharedModule
  ]
})
export class FinderModule { }
