import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser!: IUser;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      error: () => {
        this.router.navigate(['/user/login'])
      }
    })
  }

}
