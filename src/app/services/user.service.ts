import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

// ** Service concernant l'user méthode get et post

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _apiUrl = `${environment.API_URL}api/users`
  currentUser = new Subject<any>()
  loggedUser = new Subject<any>()

  //? cet url me permet de récupére des faux utilisateurs
  // ** url = "https://reqres.in/api/users"

  // cet url me permet de récupérer des utilisateurs random
  // ** randomUsersUrl = "https://randomuser.me/api/?results=6&nat=usa,gb,fr"

  dataUser = new User()

  profile = new BehaviorSubject<any>({})

  constructor(private _http: HttpClient, private _router: Router) { }


  //** méthode pour aller récupérer les utilisateurs en attendant la base de données */
  // getUsers(): Observable<any> {
  //   return this._http.get(this.url)
  // }


  // ** voici les méthodes que j'utilise pour récupérer les users de ma base de données "Friend", ou les supprimer

  addFriend(friend: string): Observable<any> {
    return this._http.post(`${environment.API_URL}api/users/addfriend`, { friendName: friend })
  }
  getFriends(): Observable<any> {
    return this._http.get(`${environment.API_URL}api/users/friends`)
  }
  deleteFriend(friend: string): Observable<any> {
    return this._http.post(`${environment.API_URL}api/users/removefriend`, { friendName: friend })
  }

  getUsersList(): Observable<any> {
    return this._http.get(`${this._apiUrl}/list`, { observe: 'response' })
  }

  getProfile() {
    return this._http.get(`${this._apiUrl}/profile`)
  }


  //** méthode pour les utilisateurs random */
  // getRandomUsers(): Observable<any> {
  //   return this._http.get(this.randomUsersUrl)
  // }

  // postData(formUser: any): Observable<any> {
  //   return this._http.post(this.url, { data: formUser })
  // }

  postUser(userDatas: User): Observable<any> {

    return this._http.post(`${this._apiUrl}/register`, userDatas)
  }

  postUserLogged(log: User): Observable<any> {
    return this._http.post(`${this._apiUrl}/login`, log)

  }

  // ** méhtode en rapport avec les tokens des users pour le register ou login

  clearToken() {
    localStorage.removeItem('token')
    this._router.navigate((['/login']))
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  setToken(token: string) {
    localStorage.setItem('token', token)
    this._router.navigate(['overview'])
  }


  isAuthenticated(): boolean {
    const isAuth = localStorage.getItem('token')
    return !!isAuth
  }
  // ---------------------------------------- token et auth---------------------------- //

  setCurrentUser(user: any): void {
    this.currentUser.next(user)
  }

  getCurrentUser(): Observable<any> {
    return this.currentUser.asObservable()
  }

  setLoggedUser(utilisateur: any) {
    this.loggedUser.next(utilisateur)
  }
  getLoggedUser(): Observable<any> {
    return this.loggedUser.asObservable()
  }





}
