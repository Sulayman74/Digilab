import { Component, Input, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-top-bar-chat',
  templateUrl: './top-bar-chat.component.html',
  styleUrls: ['./top-bar-chat.component.scss']
})
export class TopBarChatComponent implements OnInit {

  @Input() users!: any

  constructor() { }

  ngOnInit(): void {
console.log(this.users);
  }

}
