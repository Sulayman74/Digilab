import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// ** service ou je vais chercher les infos pour la météo

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  urlGps = "https://cors-anywhere.herokuapp.com/https://api-adresse.data.gouv.fr/search/";

  urlGeoLoc = "https://cors-anywhere.herokuapp.com/https://api-adresse.data.gouv.fr/reverse/"


  urlMeteo = "https://cors-anywhere.herokuapp.com/https://api.open-meteo.com/v1/forecast/"

  constructor(private _http: HttpClient) { }

  /**
   * @param  {string} rue
   * @param  {string} ville
   * @param  {number} codePostale
   */

  getPosition(rue: string, codePostale: number, ville: string): Observable<any> {

    // variable locale params
    // pour ajouter des paramètres à ma méthode j'utilise new HttpParams()
    // je les paramètres avec .append
    let paramètres = new HttpParams().append("q", `${rue},${codePostale},${ville}`)
    return this._http.get(this.urlGps,
      { params: paramètres })
  }
  /**
   * @param  {number} longitude
   * @param  {number} latitude
   */
  getWeather(longitude: number, latitude: number): Observable<any> {
    let parameters = new HttpParams().append('latitude', latitude).append('longitude', longitude).append('hourly', 'temperature_2m').append('timezone', 'Europe/Berlin')
    return this._http.get(this.urlMeteo,
      { params: parameters })
  }

  getGeoLocation(lat: number, lon: number): Observable<any> {
    let parameters = new HttpParams()
      .append("lat", lat)
      .append("lon", lon)
    return this._http.get(this.urlGeoLoc,
      { params: parameters })
  }


}
