import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  dataUsers!: any

  // jokes!: any

  // ** c'est le formControl pour mon input côté html
  msgContainer: FormControl<string> = new FormControl()

  // ** voici deux attributs type any [] qui contienent les messages reçus et envoyés, messages entre amis
  messagesReceived: any[] = []
  messagesSent!: any
//! ------------------------------- fin des messages entre amis ------------------------

// ** je dois initialiser un objet commme attribut pour qu'il correspondent à l'objet que je reçois pour ensuite pouvoir envoyer et recevoir les messages en DIRECT
liveCHat = {
  content: "",
  date:"",
  friendID: {
    username:"",
    id:""
  },
userID: {
  username:"",
  id:"",
  _v: 0,
  _id:"" 
}
}

  constructor(private _userService: UserService,
    private _socketService: SocketService
  ) { }

  ngOnInit(): void {

    this._userService.getCurrentUser().subscribe((value: any) => {
      this.dataUsers = value;
      console.log("valeurs chat room", value);
    })

    this._socketService.enterLogin()

    this._socketService.getMessagesSent()

    this._userService.getCurrentUser().subscribe((response: any) => {
      this.dataUsers = response
    })

    this._socketService.getFriendMessages().subscribe((value: any) => {
      this.messagesSent = value.sent
      this.messagesReceived = value.received
      console.log("messages enchangés entre amis", value);
    })

    this._socketService.getAllMessages()

    this._socketService.getAllMessagesReceived().subscribe((value: any) => {
      this.messagesReceived.push(value.content)
      console.warn(value, "ma réponse à laquelle je souscris de getAllMessagesReceived");
      // this.liveCHat.content = value.content
      // this.liveCHat.userID.username = value.userID.username
      // console.log(value.date);
    })

    this._socketService.getAllMessagesSent().subscribe((value: any) => {
      this.messagesSent = value.content
      console.log(value, "valeurs reçues de la souscription de getAllMessagesSent");
    })



    // this._jokeService.getJokeChat().subscribe((joke: any) => {
    //   this.jokes = joke
    //   console.log("Jokes are here", this.jokes);

    // })



  }


  onSend() {
    const msg = this.msgContainer.value
    this._socketService.sendMessage(this.dataUsers.username, msg)
    this.msgContainer.reset()
  }

  onMessagesSend(event: KeyboardEvent) {
    if (event.code === "Enter") {
      this.onSend()
    }
  }


}
