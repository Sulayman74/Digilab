import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private _userService: UserService, private _route: Router) { }
  resolve(): Observable<User> {
    return this._userService.getUsersList()
  }
}
