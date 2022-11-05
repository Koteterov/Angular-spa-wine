import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _currentUser = new BehaviorSubject<IUser | undefined>(undefined);

  currentUser$ = this._currentUser.asObservable();
  isLoggedIn$ = this.currentUser$.pipe(map((user) => !!user));


  // get isLogged(): boolean {
  //   return localStorage.hasOwnProperty("userId");
  // }

  constructor(private http: HttpClient) {}

  register$(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Observable<IUser> {
    return this.http
      .post<IUser>(`${environment.URL}/users/register`, data, {
        withCredentials: true,
      })
      .pipe(
        tap((user) => {
          localStorage.setItem('email', user.email);
          localStorage.setItem('authToken', user['accessToken']);
          localStorage.setItem('userId', user['_id']);
        })
      );
  }


  login$(data: { email: string; password: string }): Observable<IUser> {
    return this.http
      .post<IUser>(`${environment.URL}/users/login`, data, {
        withCredentials: true,
      })
      .pipe(
        tap((user) => {
          localStorage.setItem('email', user.email);
          localStorage.setItem('authToken', user['accessToken']);
          localStorage.setItem('userId', user['_id']);
        })
      );
  }

  logout$() {
    return this.http.post<IUser>(`${environment.URL}/users/logout`, {}).pipe(
      tap(() => {
        localStorage.removeItem('email');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
      })
    );
  }

  handleLogin(newUser: IUser) {
    this._currentUser.next(newUser)
  }

  handleLogout() {
    this._currentUser.next(undefined)
  }
}
