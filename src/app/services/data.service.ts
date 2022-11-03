import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { job } from '../job';

// ** Service dans lequel je récupère les datas en général

@Injectable({
  providedIn: 'root'
})
export class DataService {

  jobs = job
  urlCountries = "https://cors-anywhere.herokuapp.com/https://restcountries.com/v3.1/all"
  jokeAPI = "https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_ten"
  constructor(private _http: HttpClient) { }

getJobs(){
  return this.jobs
}
  getCountries(): Observable<any> {
    return this._http.get(this.urlCountries)
  }
  getJokeChat(): Observable<any> {
    return this._http.get(this.jokeAPI)
  }

}
