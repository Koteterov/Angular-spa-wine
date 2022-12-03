import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IRootState, login, logout } from 'src/app/+store';
import { IUser } from 'src/app/core/interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //-- global state using Subject --
  // private _currentUser = new BehaviorSubject<IUser | undefined>(undefined);
  // currentUser$ = this._currentUser.asObservable();

  currentUser$ = this.store.select((state) => state.currentUser);
  isLoggedIn$ = this.currentUser$.pipe(map((user) => !!user));

  constructor(private http: HttpClient, private store: Store<IRootState>) {}

  register$(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Observable<IUser> {
    return this.http.post<IUser>(`${environment.URL}/users/register`, data, {
      withCredentials: true,
    });
  }

  login$(data: { email: string; password: string }): Observable<IUser> {
    return this.http.post<IUser>(`${environment.URL}/users/login`, data, {
      withCredentials: true,
    });
  }

  logout$() {
    return this.http.post<IUser>(
      `${environment.URL}/users/logout`,
      {},
      { withCredentials: true }
    );
  }

  authenticate(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.URL}/users/profile`, { withCredentials: true })
      .pipe(
        tap((currentProfile) => {
          this.handleLogin(currentProfile);
        }),
        catchError((err) => {
          return EMPTY;
        })
      );
  }

  handleLogin(newUser: IUser) {
    this.store.dispatch(login({ user: newUser }));

    //-- global state using Subject --
    // this._currentUser.next(newUser);
  }

  handleLogout() {
    this.store.dispatch(logout());

    //-- global state using Subject --
    // this._currentUser.next(undefined);
  }

  getProfile$(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.URL}/users/profile`, {
      withCredentials: true,
    });
  }
}
