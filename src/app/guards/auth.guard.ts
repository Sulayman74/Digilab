import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _tokenService: UserService,
    private _router: Router,
    private _snackBar: MatSnackBar) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let test = this._tokenService.isAuthenticated()
    console.log(test);
    if (test) {
      return true
    }
    this._snackBar.open("vous n'êtes pas connecté, vous n'avez pas l'accès","ok")
    return this._router.navigate([""]);
  }

}
