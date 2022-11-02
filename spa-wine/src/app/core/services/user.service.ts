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

  login$(data: { email: string; password: string }): Observable<IUser> {
    return this.http
      .post<IUser>(`${environment.URL}/users/login`, data, {withCredentials: false})
      .pipe(tap((user) => (this.user = user)));
  }

  // login(data: { email: string; password: string }) {
  //   return this.http.post<IUser>(`/api/users/login`, data).pipe(
  //     tap((user) => this.user = user)
  //   );
  // }

  //==============
  // login$(userData: { email: string, password: string }): Observable<IUser> {
  //   return this.httpClient
  //     .post<IUser>(`${environment.apiUrl}/login`, userData, { withCredentials: true, observe: 'response' })
  //     .pipe(
  //       map(response => response.body),
  //     )
  // }
}
