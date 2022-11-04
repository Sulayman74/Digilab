import { } from 'rxjs/operators'

import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  regex = new RegExp('digifab-chat');
  // regex = new RegExp('https://plenty-yaks-add-88-166-5-79.loca.lt/');


  constructor(private _userService: UserService,
    private _snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const userToken = UserService.getToken()

    // console.warn(request.url);

    if (this.regex.test(request.url)) {
      const modifiedReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${userToken}`)
      })

      return next.handle(modifiedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          let message = ""
          switch (error.status) {
            case 400:
              message = "Bad Request bro"
              break;
            case 401:
              message = "Unauthorized sis"
              break;
            case 404:
              message = "Vous êtes pas bien connecté"
              break;

            default: message = "Erreur de connexion"
              break;
          }
          this._snackBar.open(message, "ok")
          return next.handle(modifiedReq)
        })
      )
    }

    return next.handle(request)
  }
}

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeaderInterceptor,
  multi: true
}