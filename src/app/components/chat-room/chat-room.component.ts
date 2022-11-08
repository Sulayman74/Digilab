import { Component, OnInit } from '@angular/core';

import { ChatMessage } from './../../models/chat-message';
import { DataService } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocketService } from 'src/app/services/socket.service';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {


  chatmessage = new ChatMessage()
  dataUsers!: any
  monProfil!: any
  show!: boolean
  // jokes!: any
  emetteur!: any
  destinataire!: any
  // ** c'est le formControl pour mon input côté html
  msgContainer: FormControl<string> = new FormControl()

  // ** voici deux attributs type any [] qui contienent les messages reçus et envoyés, messages entre amis
  messagesReceived: any[] = []
  messagesSent!: any

  usersOnline: any[] = []
  //! ------------------------------- fin des messages entre amis ------------------------



  constructor(private _userService: UserService,
    private _socketService: SocketService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {


    this._userService.getProfile().subscribe((monProfil: any) => {
      this.monProfil = monProfil
      // console.log(monProfil);
    })

    // this._userService.getCurrentUser().subscribe((value: any) => {
    //   this.dataUsers = value;
    //   this.dataUsers.username = value.username
    //   console.log("valeurs chat room", value.username);
    // })

    this._userService.getCurrentUser().subscribe((response: any) => {
      this.dataUsers = response
      // console.log(this.dataUsers)


      this._socketService.getFriendMessages(this.dataUsers.username)
        .subscribe((value: any) => {
          this.messagesReceived = value

          console.log("messages enchangés entre amis", value);


        })


    })


    this._socketService.getAllMessagesReceived().subscribe((value: any) => {
      console.log("valeur reçu", value.userID.username);

      if (this.dataUsers.username !== value.userID.username) {
        this._snackBar.open
          ('Message reçu de : ' + value.userID.username, "Ok",
            { verticalPosition: "top", horizontalPosition: "right" })

      }

      if (this.dataUsers.username == value.userID.username) {
        this.messagesReceived.push(value)
      }


      console.warn(value, "ma réponse à laquelle je souscris de getAllMessagesReceived");

    })

    this._socketService.getAllMessagesSent().subscribe((value: any) => {
      this.messagesReceived.push(value)
      console.log(value, "valeurs reçues de la souscription de getAllMessagesSent");
    })



    // this._jokeService.getJokeChat().subscribe((joke: any) => {
    //   this.jokes = joke
    //   console.log("Jokes are here", this.jokes);

    // })



  }
  onShow() {
    this.show = !this.show
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
