import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-top-bar-chat',
  templateUrl: './top-bar-chat.component.html',
  styleUrls: ['./top-bar-chat.component.scss']
})
export class TopBarChatComponent implements OnInit {

  userDatas!: any
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getCurrentUser().subscribe((response: any) => {
      this.userDatas = response
    }
    )
  }

}
