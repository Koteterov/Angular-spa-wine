import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent  {
  
  user: string | null = localStorage.getItem("email")

  constructor(public userService: UserService, private router: Router) {
    
  }
  

  logout(): void {
    this.userService.logout$().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
