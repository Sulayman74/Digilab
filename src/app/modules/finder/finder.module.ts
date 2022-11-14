import { FinderComponent } from 'src/app/components/finder/finder.component';
import { FinderRoutingModule } from './finder-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FinderComponent],
  imports: [
    FinderRoutingModule,
    SharedModule
  ]
})
export class FinderModule { }
