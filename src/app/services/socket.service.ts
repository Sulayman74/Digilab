import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private _socket: Socket,
    private _http: HttpClient) { }

// ** pour initier une conversation j'utilise cette méthode
  enterLogin() {
    this._socket.emit('login', {token : UserService.getToken()})
  }


// ** pour envoyer des messages j'utilise cette méthode
  sendMessage(user:any,message:string) {
    this._socket.emit('send friend message',
    {friendName : user.username, content: message})
  }
// ** j'affiche les messages
  getMessages(){
    return this._socket.on('friend message sent',
    (data:any)=> console.log(data))
  }

  getFriendMessages():Observable<any> {
    return this._http.get(`${environment.API_URL}/api/messages/friendmessages`)
  }

}
