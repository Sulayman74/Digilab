// ** Component où je vais pouvoir créer des dossiers avec un modal qui apparait au click

import { Component, Inject, OnInit } from '@angular/core';

import { DirectoryModalComponent } from 'src/app/modals/directory-modal/directory-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  directories: any[] = []


  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {

  }



  addNewDir(): void {
    const dialogRef = this._dialog.open(DirectoryModalComponent)
    dialogRef
      .afterClosed()
      .subscribe((responseFromModal: any) => {
        console.warn('response de la modal lors de la cloture ', responseFromModal);
        this.directories = [responseFromModal, ...this.directories]

      })
  }





}
