import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar-left',
  templateUrl: './side-bar-left.component.html',
  styleUrls: ['./side-bar-left.component.scss']
})
export class SideBarLeftComponent implements OnInit {

  @Input() monProfile!: any

  constructor() { }

  ngOnInit(): void {

    // console.warn("Mon profile", this.monProfile);
  }

}
