import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userData: User = {
    email: "",
    password: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  displayUser(): void {
    console.log(this.userData);
  }

}
