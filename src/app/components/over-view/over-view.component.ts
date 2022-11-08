import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Socket } from 'ngx-socket-io';
import { SocketService } from './../../services/socket.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss']
})
export class OverViewComponent implements OnInit {

  user = new User()
  dataUsers: any;
  messagesReceived: any;

  constructor(private _userService: UserService,
    private _socketService: SocketService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._userService.getProfile().subscribe((user: any) => {
      this.user = user
      // console.warn("user", this.user);
    })
  }

}
