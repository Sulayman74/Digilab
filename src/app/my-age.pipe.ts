import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAge'
})
export class MyAgePipe implements PipeTransform {

  currentYear!: any
  userAge!: any
  year!: any
  regex = new RegExp('/[0-9]{4}(-)+[0-9]{2}(-)+[0-9]{1,2}$/');
  regexNum = new RegExp('/[0-9]{1,}/');

  transform(value: any): any {

    this.currentYear = new Date().getFullYear()
    this.year = new Date(value).getFullYear()
    this.userAge = this.currentYear - this.year
    console.log(value);
    return this.userAge
    
  }

}

