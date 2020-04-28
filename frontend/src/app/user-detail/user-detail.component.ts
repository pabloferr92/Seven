import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiUserDetailService } from './api-user-detail.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api:ApiUserDetailService) { }

  user = {id:'', username: '', email : '', last_name : ''}

  ngOnInit(): void {
    this.retrieveUser();
  }

  retrieveUser() {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getUser(id).subscribe(
      data => {
      this.user = (data);
    },
    error => {
      console.log("error message: ", error.message);
    }
    );
  }
  

}
