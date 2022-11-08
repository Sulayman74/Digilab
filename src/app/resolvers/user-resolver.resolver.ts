import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { UserService } from './../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverResolver implements Resolve<boolean> {
  constructor(private _userService: UserService, private _route: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }
}
