import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss']
})
export class OverViewComponent implements OnInit {

  @Input() monProfile!: any
  user = new User()
  dataUsers: any;
  messagesReceived: any;

  constructor(private _userService: UserService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._userService.getProfile().subscribe((user: any) => {
      this.user = user
      // console.warn("user", this.user);
    })

    this._activatedRoute.data.subscribe(({ profile }) => {
      this.monProfile = profile
      // console.log(this.monProfile);
    })

  }

}
