import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../models/user'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title = 'users-front'

  users = []
  constructor(private api: UsersService) {
    this.getUsers();
   }
  getUsers = () => {
    this.api.listUsers().subscribe(
      data => {
      this.users = data
    },
    error => {
      console.log("error message: ", error.message);
    }
    );
  };

}