import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-side-bar-right',
  templateUrl: './side-bar-right.component.html',
  styleUrls: ['./side-bar-right.component.scss']
})
export class SideBarRightComponent implements OnInit {


  constructor(private _tokenService: UserService) { }

  ngOnInit(): void {

  }
  onLogout() {
    this._tokenService.clearToken()
    throw new Error('Method not implemented.');
  }
}
