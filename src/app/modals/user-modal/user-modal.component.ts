import { User } from './../../models/user';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public dataUser: User,
    public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {

  }

  onYesClick() {
    this.dialogRef.close(this.dataUser);
    console.warn("hello je suis ici" + ' ' + this.dataUser.nom, this.dataUser.prenom)
  }

  onNoClick() {
    this.dialogRef.close()

  }

}
