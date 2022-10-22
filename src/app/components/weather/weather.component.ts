import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { WeatherModalComponent } from 'src/app/modals/weather-modal/weather-modal.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  meteo = {
    rue: "11 rue Paul Bert",
    codePostale: 74100,
    ville: "Annemasse",
    temperature: 0
  }

  constructor(private _dialog: MatDialog) { }

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
      console.warn('response de la modal lors de la cloture ', responseFromModal);
      this.meteo = responseFromModal

    })
  }
}
