import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css'],
})
export class UserInsertComponent implements OnInit {
  @ViewChild('userForm') userForm!: NgForm;
  user: any = {};
  isInserting = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  insertUser(): void {
    if (this.userForm.valid) {
      this.isInserting = true;
      this.userService.insertUser(this.user).subscribe(
        (response) => {
          // Handle success
          console.log(response);
          this.isInserting = false;
        },
        (error) => {
          // Handleerror
          console.log(error);
          this.isInserting = false;
        }
      );
    }
  }
}
