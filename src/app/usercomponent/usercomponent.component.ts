import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.scss']
})
export class UsercomponentComponent implements OnInit {
  user:{
    name:string
  }
  isLoggedIn= false;

  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.user = this.userservice.user
  }

}
