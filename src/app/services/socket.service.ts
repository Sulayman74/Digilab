import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

 allMessagesReceived = new BehaviorSubject({})
 allMessagesSent = new BehaviorSubject({})


  constructor(private _socket: Socket,
    private _http: HttpClient) { }

// ** pour initier une conversation j'utilise cette méthode
  enterLogin() {
    this._socket.emit('login', {token : UserService.getToken()})
  }


// ** pour envoyer des messages j'utilise cette méthode
  sendMessage(user:any,message:string) {
    console.log(user);
    this._socket.emit('send friend message',
    {friendName : user, content: message})
    
  }
// ** j'affiche les messages
  getMessagesSent(){
    this._socket.on('friend message sent',
    (data:any)=> {console.log(data);
    this.allMessagesSent.next(data)
    })
  }

  getAllMessagesSent():Observable<any>{
    return this.allMessagesSent.asObservable()
  }

  getFriendMessages():Observable<any> {
    return this._http.get(`${environment.API_URL}api/messages/friendmessages`)
  }

  getAllMessages(){
    this._socket.on('friend message',(value:any)=>{
      console.log(value);
      this.allMessagesReceived.next(value)
    })
  }
  getAllMessagesReceived():Observable<any>{
    return this.allMessagesReceived.asObservable()
  }



}
