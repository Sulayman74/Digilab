import { Observable, Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// ** Service concernant l'user méthode get et post

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = new Subject<any>()

  url = "https://reqres.in/api/users"

  constructor(private _http: HttpClient) { }

  getUser(): Observable<Array<any>> {
    // @ts-ignore
    return this._http.get(this.url)
  }

  postData(formUser: any): Observable<any> {
    return this._http.post(this.url, { data: formUser })
  }

  setCurrentUser(user: any): void {
    this.currentUser.next(user)
  }
  getCurrentUser(): Observable<any> {
    return this.currentUser.asObservable()
  }



}
