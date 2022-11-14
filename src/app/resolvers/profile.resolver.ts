import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<any> {

  constructor(private _profileService: UserService) { }
  resolve(): Observable<any> {
    return this._profileService.getProfile()
  }
}
