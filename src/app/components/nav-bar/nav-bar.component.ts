import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  @Input() user!: User

 
  constructor() { }

  ngOnInit(): void {
  
   console.log("datas", this.user);
   
  }




}
