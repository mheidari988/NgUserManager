import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] | undefined;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }

  goToUserDetails(id: number): void {
    this.router.navigate(['/users', id]);
  }

  goToUserInsert(): void {
    this.router.navigate(['/insert']);
  }
}
