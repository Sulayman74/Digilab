import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyAgePipe } from 'src/app/my-age.pipe';
import { User } from './../../models/user';
import { UserModalComponent } from 'src/app/modals/user-modal/user-modal.component';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // localStorageItem!: any
  // user!: any;
  // randomPerson: any
  userData: any[] = []
  searchBar: FormControl = new FormControl()
  newArray: any[] = []
  // nom: any;
  // prenom: any;
  users!: User[]
  isChecked = false;
  notFriend!:boolean
  // show = false

  amis!:any[]

  constructor(private _userService: UserService,
    private _userModal: MatDialog,
    private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
this._userService.getFriends().subscribe((friend:any)=> {
this.amis = [...friend]
console.log(this.amis);
})

    // this.localStorageItem = this._userService.getProfile()
    // this.user = JSON.parse(this.localStorageItem)

    // console.warn(this.user);

    // this.nom = this.user.email.split('.')
    // let prenomTest = this.user.email.split('@')
    // this.prenom = prenomTest[0].split('.')

    this._userService.getUsersList().subscribe((value: any) => {
      this.users = value.body
      console.log("first log", this.users);
      this.newArray = [" ", ...this.users]
    })
    // this.users = this.users.filter((mySelf: any) => mySelf.username)


    this.searchBar.valueChanges.subscribe((resultSearch: any) => {
      this.newArray = this.userData.filter(
        (user: User) => {

          return user.firstName.toLowerCase().includes(resultSearch.toLowerCase()) || user.lastName.toLowerCase().includes(resultSearch.toLowerCase()) || user.city?.toLowerCase().includes(resultSearch.toLowerCase())
        }
      )
    })
  }


  onOpenDialog(user: any) {
    const modal = this._userModal.open(UserModalComponent,
      {
        enterAnimationDuration: "300ms",
        exitAnimationDuration: "350ms",
        data: user
      }

    )
    // console.log("user", user);
    modal.afterClosed().subscribe((responseFromModal: any) => {
      if (responseFromModal) {
        this._userService.setCurrentUser(user)
      }
    })
  }

  onAddFriend(friend:any) {
    console.warn("ami",friend.username);
    this._userService.addFriend(friend.username).subscribe((isFriend:boolean)=>{
      console.log({friendName: isFriend});
      this.amis.push(friend)

    })
  }

  onDeleteFriend(index:number,friend:any){
    this._userService.deleteFriend(friend.username).subscribe((isNotFriend:boolean)=>{
      console.log(isNotFriend);
      this.notFriend = false
      //TODO méthode splice à améliorer car je dois rafraichir la page je cible bien mais probleme UX
      // this.amis = this.amis.splice(index,friend)

      this.amis = this.amis.filter((value:any)=> value.username !== friend.username)
     
    })
  }


  // onShow() {
  //   this.show = !this.show
  // }

}
