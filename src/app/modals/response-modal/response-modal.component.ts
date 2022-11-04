import { UserService } from 'src/app/services/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrls: ['./response-modal.component.scss']
})


export class ResponseModalComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit(): void {
    // console.log(this.data);
  }




}
