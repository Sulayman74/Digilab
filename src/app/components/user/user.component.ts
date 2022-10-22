import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MyAgePipe } from 'src/app/my-age.pipe';
import { User } from './../../models/user';
import { UserModalComponent } from 'src/app/modals/user-modal/user-modal.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userData!: any


  constructor(private _userService: UserService,
    private _userModal: MatDialog) { }

  ngOnInit(): void {
    this._userService.getUser().subscribe((utilisateur: any) => this.userData = utilisateur.data)
  }
  onOpenDialog(user: User) {
    const modal = this._userModal.open(UserModalComponent,
      {
        enterAnimationDuration: "300ms",
        exitAnimationDuration: "350ms",
        data: {
          prenom: user.prenom,
          nom: user.nom,
          photo: user.imgUrl,

        }
      }

    )
    console.log(user);
    modal.afterClosed().subscribe((responseFromModal: any) => {
      if (responseFromModal) {
        this._userService.setCurrentUser(user)
      }
    })
  }



}
