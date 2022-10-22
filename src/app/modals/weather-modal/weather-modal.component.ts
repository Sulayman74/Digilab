import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, take, switchMap, delay } from 'rxjs/operators';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-modal',
  templateUrl: './weather-modal.component.html',
  styleUrls: ['./weather-modal.component.scss']
})
export class WeatherModalComponent implements OnInit {

  meteoForm!: FormGroup
  show: boolean = false

  constructor(private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public meteo: any,
    private _gps: WeatherService,
    private _datas: MatDialogRef<any>) { }

  // ** récuperer les informations du component qui ouvre la modale @Inject "injection de token"

  ngOnInit(): void {
    // this.meteoForm = this.meteo
    // console.log(this.meteo);

    this.meteoForm = this._fb.group(
      {
        rue: [this.meteo.rue, Validators.required],
        codePostale: [this.meteo.codePostale, Validators.required],
        ville: [this.meteo.ville, Validators.required],

      }
    )

  }

  onSubmit(): void {
    const formData = this.meteoForm.value
    let now = new Date();
    let heure = now.getHours();

    this._gps.getPosition(formData.rue, formData.codePostale, formData.ville)
      .pipe(take(1), switchMap((responseFromServerGPS: any) => {

        const dataGps = {
          latitude: responseFromServerGPS.features[0].geometry.coordinates[0],
          longitude: responseFromServerGPS.features[0].geometry.coordinates[1]
        };
        console.warn(dataGps.longitude, dataGps.latitude);

        return this._gps.getWeather(dataGps.latitude, dataGps.longitude)
      }))
      .subscribe((responseFromWeatherServer: any) => {
        console.log(responseFromWeatherServer);
        this._datas.close({
          temperature: responseFromWeatherServer.hourly.temperature_2m[heure],
          rue: formData.rue,
          codePostale: formData.codePostale,
          ville: formData.ville
        })

        this.show = true
      })




    //   this._gps.getPosition(formData.rue, formData.ville, formData.codePostale).pipe(take(1),map((responseFromServer:any)=>{console.log(responseFromServer.features[0].geometry.coordinates[0],responseFromServer.features[0].geometry.coordinates[1]);
    // this.dataGps = {longitude :responseFromServer.features[0].geometry.coordinates[0], latitude: responseFromServer.features[0].geometry.coordinates[1]};
    // console.warn(this.dataGps)
    //   })).subscribe()

  }
}



