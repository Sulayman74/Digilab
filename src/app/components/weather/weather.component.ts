import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { WeatherModalComponent } from 'src/app/modals/weather-modal/weather-modal.component';
import { WeatherService } from 'src/app/services/weather.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  meteo = {
    rue: "117 clos des Oches",
    codePostale: 74130,
    ville: "Bonneville",
    temperature: null
  }

  lat!: number
  lon!: number

  constructor(private _dialog: MatDialog,
    private _locationService: WeatherService) { }

  ngOnInit(): void {
    // this._meteo.getData().subscribe((meteo: any) => { this.previsions = meteo; console.log(meteo); })
  }


  // ! j'ouvre ma modal et je lui fais passer des datas "{data : }"

  onOpendModal(): void {

    const dialogRef = this._dialog.open(WeatherModalComponent,
      {
        enterAnimationDuration: "500ms",
        exitAnimationDuration: "1500ms",
        data: {
          rue: this.meteo.rue,
          codePostale: this.meteo.codePostale,
          ville: this.meteo.ville
        }
      });
    dialogRef.afterClosed().subscribe((responseFromModal: any) => {
      // console.warn('response de la modal lors de la cloture ', responseFromModal);
      this.meteo = responseFromModal

    })
  }

  onGetPosition() {
    let now = new Date();
    let heure = now.getHours();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this._locationService.getWeather(this.lon, this.lat).subscribe((value: any) => {
          this.meteo.temperature = value.hourly.temperature_2m[heure];
          this._locationService.getGeoLocation(value.latitude, value.longitude).subscribe((position: any) => {
            console.log(position);
            this.meteo.rue = position.features[0].properties.name
            this.meteo.codePostale = position.features[0].properties.postcode
            this.meteo.ville = position.features[0].properties.city
         
          })

        })
      })

    }

  }
}
