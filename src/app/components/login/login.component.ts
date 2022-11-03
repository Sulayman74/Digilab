import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

// ** Component de login de l'utilisateur, avec reactive Forms

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup<any>;

  user = new User()

  constructor(
    private _userService: UserService,
    private _fb: FormBuilder,
    private _route: Router,
    private _socketService:SocketService) { }

  ngOnInit(): void {

    


    this.loginForm = this._fb.group({
      email: [this.user.email,
      Validators.email],
      password: [this.user.password, [Validators.minLength(8),
      Validators.maxLength(12)]],
    })



  }

  onClick() {
    this._route.navigate(['register'])
  }

  onSubmit() {

    let loggedUser = this.loginForm.value

    this.user = Object.assign(this.user, loggedUser)

    this._userService.postUserLogged(loggedUser).subscribe((results: User) => {

      if (results) {
       
        this._route.navigate(['overview'])
localStorage.setItem('token',results.token)
      }


    })

  }


}
