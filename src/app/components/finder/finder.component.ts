import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {

  searchBar: FormControl = new FormControl();
  newArray: any[] = []
  recherches: any[] = []
  jobs = this._dataService.getJobs()

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.searchBar.valueChanges.subscribe((recherche: any) => {
      console.log("recherche", recherche);
      this.recherches = recherche


    })
    // console.log(this.jobs);
  }

}
