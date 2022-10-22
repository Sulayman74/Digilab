import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// ** Service dans lequel je récupère les datas en général

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlCountries = "https://restcountries.com/v3.1/all"

  constructor(private http: HttpClient) { }


  getCountries(): Observable<any> {

    return this.http.get(this.urlCountries)
  }

}
