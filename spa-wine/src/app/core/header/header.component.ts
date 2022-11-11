import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user$: Observable<IUser | undefined> = this.userService.currentUser$;
  isLogged$: Observable<boolean> = this.userService.isLoggedIn$;

  constructor(public userService: UserService, private router: Router) {}

  logoutHandler(): void {
    this.userService.logout$().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}

