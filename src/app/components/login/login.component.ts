import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

// ** Component de login de l'utilisateur, avec reactive Forms

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup<any>;




  constructor(
    private _userService: UserService,
    private _fb: FormBuilder,
    private _route: Router) { }

  ngOnInit(): void {

    this.loginForm = this._fb.group({

      email: ["", [
        Validators.email,
        Validators.required]],
      password: ["", [Validators.minLength(8),
      Validators.maxLength(12)]],
    })


  }

  onClick() {
    this._route.navigate(['register'])
  }

  onSubmit() {
    this.loginForm.value
    console.log("tu es log");
    this._route.navigate(['overview'])
  }

}
