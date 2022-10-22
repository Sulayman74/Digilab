// ** le modal qui apparait lors du click dans le component directory

import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-directory-modal',
  templateUrl: './directory-modal.component.html',
  styleUrls: ['./directory-modal.component.scss']
})

export class DirectoryModalComponent implements OnInit {

  directoryForm!: FormGroup
  
// * MatDialog pour ouvrir un modal et MatDialoRef pour fermer

  constructor(private _dialogRef: MatDialogRef<DirectoryModalComponent>, private _fb: FormBuilder,
    private _submitForm: UserService) { }

  ngOnInit(): void {
  
    this.directoryForm = this._fb.group(
      {
        nom: ["", Validators.minLength(2)],
        chemin: ["", Validators.minLength(5)],
        //chemin: ["", [Validators.minLength(5), Validators.pattern('[a-zA-Z0-9&?-_.]{2,}\/+')]],
        description: ["", Validators.minLength(10)]
      }
    )
  }

  // TODO get directories(): FormArray { return this.directoryForm.get('directories') as FormArray } */

 
  onSubmit() {
    
    this._submitForm.postData(this.directoryForm.value).subscribe((responseFromServer: any) => {
      console.log(responseFromServer);
      this._dialogRef.close(responseFromServer)
    })
  }

}
