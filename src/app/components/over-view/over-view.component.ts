import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss']
})
export class OverViewComponent implements OnInit {

  user = new User()

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getProfile().subscribe((user: any) => {
      this.user = user
      console.warn("user", this.user);
    })
  }

}
