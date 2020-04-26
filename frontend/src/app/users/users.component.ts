import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  alunos: Array<any> = new Array();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.listarAlunos();
  }

  listarAlunos(){

  }

}
