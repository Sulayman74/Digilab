import { Component, OnInit } from '@angular/core';

import { SocketService } from './../../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private _socketService: SocketService) { }

  ngOnInit(): void {
    this._socketService.enterLogin()

    this._socketService.getMessagesSent()

    this._socketService.getAllMessages()


  }

}
