import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, } from '@angular/router';
import { SocketService } from './../services/socket.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class UserResolver implements Resolve<User> {
  constructor(private _socketService: SocketService) { }
  resolve(): Observable<User> {
    return this._socketService.getOnlineUsers()
  }
}
