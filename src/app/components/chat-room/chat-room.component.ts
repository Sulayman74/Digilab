import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  userDatas!: any
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getCurrentUser().subscribe((response: any) => {
      this.userDatas = response
    })
  }

}
