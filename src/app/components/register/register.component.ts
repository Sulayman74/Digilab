import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject, map, startWith } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { ResponseModalComponent } from 'src/app/modals/response-modal/response-modal.component';
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
  countries!: any
  myControl = new FormControl('')
  options!: string[]
  flags!: any
  filteredOptions!: Observable<string[]>
  userForm !: FormGroup
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required)

  constructor(private _dataService: DataService,
    private _userService: UserService,
    private _fb: FormBuilder,
    private popUp: MatDialog,
  ) { }

  ngOnInit(): void {
    /**
     * @param  {any} .subscribe((value
     */
    this._dataService.getCountries().subscribe((value: any) => { this.countries = value; this.options = this.sortCountries(); }
    )

    /**
     * @param  {} 'pays'
     * @param  {} ?.valueChanges.pipe(startWith(''
     * @param  {} map(value=>this._filter(value||''
     */
    //@ts-ignore
    this.filteredOptions = this.userForm?.get('pays')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    /**
     * @param  {""} {nom
     * @param  {""} prenom
     * @param  {""} pseudo
     * @param  {""} dateDeNaissance
     * @param  {[""} email
     * @param  {} [Validators.email
     * @param  {} Validators.required]]
     * @param  {""} adresse
     * @param  {[""} password
     * @param  {} [Validators.minLength(8
     * @param  {} Validators.maxLength(12
     * @param  {} ]]
     * @param  {""} confirmPassword
     * @param  {newFormArray([]} skills
     */
    this.userForm = this._fb.group({
      nom: "",
      prenom: "",
      pseudo: "",
      dateDeNaissance: "",
      email: ["", [
        Validators.email,
        Validators.required]],
      adresse: "",
      password: ["", [Validators.minLength(8),
      Validators.maxLength(12)]],
      confirmPassword: "",
      skills: new FormArray([])
    })
  }
  /**
   * @param  {string} value
   */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options?.filter(option => option.toLowerCase().includes(filterValue));
  }

  sortCountries(): any {
    return this.countries.map((countryName: any) => countryName.name.common)
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

  onSubmit() {
    // console.log(this.userForm.value);
    const form = this.userForm.value
    this._userService.postData(form).subscribe((response: any) => {
      console.log(response);
      this.popUp.open(ResponseModalComponent, {
        width: '60%',
        height: '80%',
        enterAnimationDuration: '1500ms',
        exitAnimationDuration: '1200ms',
        data: { infos: response.data, creation: response.createdAt, id: response.id },
      })
    })
  }
  // ** méthode message erreur envoyé */
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}

