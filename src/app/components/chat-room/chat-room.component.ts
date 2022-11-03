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

  msgContainer: FormControl<string> = new FormControl()
  results: any;
  newMessage: any;


  constructor(private _userService: UserService,
    private _socketService: SocketService
  ) { }

  ngOnInit(): void {

    this._userService.getCurrentUser().subscribe((value: any) => {
      this.dataUsers = value;
      console.log("valeurs chat room", value);
    })

    this._socketService.enterLogin()

    this._socketService.getMessages()

    this._userService.getCurrentUser().subscribe((response: any) => {
      console.warn(response);
      this.dataUsers = response
    })

    this._socketService.getFriendMessages().subscribe((value:any)=>{
      console.log("value sent",value.sent);
      this.results = value.sent
    })


    // this._jokeService.getJokeChat().subscribe((joke: any) => {
    //   this.jokes = joke
    //   console.log("Jokes are here", this.jokes);

    // })



  }
  onSend() {
    const msg = this.newMessage.value
    this._socketService.sendMessage(this.dataUsers,msg)
    this.newMessage.reset()
  }

  onMessagesSend(event: KeyboardEvent) {
    if (event.code === "Enter") {
      console.log("hello");
    }
  }


}
