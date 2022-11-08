import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WeatherComponent } from 'src/app/components/weather/weather.component';
import { WeatherModalComponent } from 'src/app/modals/weather-modal/weather-modal.component';

@NgModule({
  declarations: [WeatherComponent,
    WeatherModalComponent],
  imports: [
    CommonModule
  ]
})
export class WeatherModule { }
