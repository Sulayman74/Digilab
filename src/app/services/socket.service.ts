import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  allMessagesReceived$ = new Subject<any>()
  // allMessagesReceived = new BehaviorSubject([])
  allMessagesSent$ = new Subject<any>()
  // allMessagesSent = new BehaviorSubject([])
  usersOnline$ = new Subject<any>()


  constructor(private _socket: Socket,
    private _http: HttpClient) { }

  // ** pour initier une conversation j'utilise cette méthode
  enterLogin() {
    this._socket.emit('login', { token: UserService.getToken() })
  }
  onLineUsers() {
    this._socket.on('users list', (value: any) => {
      this.usersOnline$.next(value)
    })
  }

  getOnlineUsers(): Observable<any> {
    return this.usersOnline$.asObservable()
  }



  // ** pour envoyer des messages j'utilise cette méthode
  sendMessage(user: any, message: string) {
    console.log(user);
    this._socket.emit('send friend message',
      { friendName: user, content: message })

  }
  // ** j'affiche les messages
  getMessagesSent() {
    this._socket.on('friend message sent',
      (data: any) => {
        this.allMessagesSent$.next(data)
      })
  }

  getAllMessagesSent(): Observable<any> {
    return this.allMessagesSent$.asObservable()
  }

  getFriendMessages(currentUsername: string): Observable<any> {
    return this._http.get(`${environment.API_URL}api/messages/friendmessages/${currentUsername}`)
  }

  getAllMessages() {
    this._socket.on('friend message', (value: any) => {
      // console.log(value);
      this.allMessagesReceived$.next(value)
    })
  }
  getAllMessagesReceived(): Observable<any> {
    return this.allMessagesReceived$.asObservable()
  }



}
