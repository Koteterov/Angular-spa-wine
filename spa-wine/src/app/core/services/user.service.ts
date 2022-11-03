import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser | null | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

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
      .pipe(tap((user) => {
        this.user = user;
        localStorage.setItem('email', user.email);
        localStorage.setItem('authToken', user['accessToken']);
        localStorage.setItem('userId', user['_id']);
    }));
  }

  login$(data: { email: string; password: string }): Observable<IUser> {
    return this.http
      .post<IUser>(`${environment.URL}/users/login`, data, {
        withCredentials: true,
      })
      .pipe(
        tap((user) => {
          this.user = user;
          localStorage.setItem('email', user.email);
          localStorage.setItem('authToken', user['accessToken']);
          localStorage.setItem('userId', user['_id']);
        })
      );
  }

  logout() {
    return this.http.post<IUser>(`${environment.URL}/users/logout`, {}).pipe(
      tap(() => {
        this.user = null;
        localStorage.removeItem('email');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
      })
    );
  }
}
