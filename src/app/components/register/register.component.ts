import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable, Subject, map, startWith } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { ResponseModalComponent } from 'src/app/modals/response-modal/response-modal.component';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /**
   * @param  {} ''
   * @param  {string[]flags!:anyfilteredOptions!:Observable<string[]>userForm!:FormGroupemail=newFormControl(''} options!
   * @param  {} [Validators.required
   * @param  {} Validators.email]
   * @param  {} ;password=newFormControl(''
   * @param  {} Validators.required
   */

  birthday = ''

  userForm !: FormGroup
  countries!: any
  filteredOptions!: Observable<string[]> | undefined
  options: string[] = []

  // myControl = new FormControl('')
  flags!: any
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required)
  confirmPassword = new FormControl('', Validators.required)

  user = new User()


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  countriesFiltre!: any[];

  constructor(private _dataService: DataService,
    private _userService: UserService,
    private _fb: FormBuilder,
    private _popUp: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.user.avatar = "https://i.giphy.com/media/wzWxTUiXRQDYc/giphy.webp"
    /**
     * @param  {any} .subscribe((value
     */
    this._dataService.getCountries().subscribe((countries: any) => {
      this.countries = countries;
      this.options = this.sortCountries();
    })

    this.userForm = this._fb.group({
      username: [this.user.username, Validators.required],
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      password: [this.user.password, [Validators.minLength(8),
      Validators.maxLength(12)]],
      confirmPassword: ["", Validators.required],
      dateDeNaissance: this.user.username,
      email: [this.user.email, [
        Validators.email,
        Validators.required]],
      country: [this.options, Validators.required],
      city: this.user.city,
      street: this.user.street,
      zipCode: this.user.zipCode,
      phoneNumber: this.user.phoneNumber,
      skills: new FormArray([])
    })

    this.filteredOptions = this.userForm?.get('country')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );


  }


  sortCountries(): string[] {
    return this.countries.map((countryName: any) => countryName.name.common)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options?.filter(option => option.toLowerCase().includes(filterValue));
  }



  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray
  }



  addSkill() {
    const competence = new FormControl('');
    this.skills.push(competence)
  }
  /**
   * @param  {number} i
   */
  deleteSkill(i: number) {
    this.skills.removeAt(i)
  }

  onSubmit(): any {

    const form = this.userForm.value
    const password = form.password
    const confirmPassword = form.confirmPassword
    this.user.skills = this.userForm.value.skills

    this.user = Object.assign(this.user, form)

    if (password !== confirmPassword) {
      return this._snackBar.open('Not Matching passwords', 'WTF', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }

    this._userService.postUser(this.user).subscribe((response: any) => {

      this._popUp.open(ResponseModalComponent, {
        width: '60%',
        height: '80%',
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '1200ms',
        data: { users: response },
      })



      this._userService.setToken(response.token)
    })

  }


  // ** méthode message erreur envoyé */
  getErrorMessageMail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessagePassword() {
    if (this.confirmPassword.hasError('required')) {
      return 'You must enter a value';
    }

    return this.confirmPassword.hasError('confirmPassword') ? 'Not matching passwords' : '';
  }


}

