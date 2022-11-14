import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SocketService } from './../../services/socket.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  users!: any

  constructor(private _socketService: SocketService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this._activatedRoute.data.subscribe(({ user }) => {
      this.users = user
    })

    this._socketService.enterLogin()

    this._socketService.getMessagesSent()

    this._socketService.getAllMessages()


  }
}
