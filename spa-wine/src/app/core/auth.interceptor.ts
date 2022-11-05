import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './services/user.service';
import { IUser } from '../shared/interfaces/user';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          if (event.url?.endsWith('login') || event.url?.endsWith('register')) {
            const loggedUser: IUser = event.body as IUser;
            this.userService.handleLogin(loggedUser);
          } else if (event.url?.endsWith('logout')) {
            this.userService.handleLogout();
          }
        }
      })
    );
  }
}
