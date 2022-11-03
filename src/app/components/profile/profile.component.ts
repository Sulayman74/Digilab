import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileUser = new User()

  constructor(private _userService: UserService) { }

  ngOnInit(): void {

    this._userService.getProfile().subscribe((user: any) => {
      this.profileUser = user
      console.log("Hello I'm here", this.profileUser);
    })
  }

}
