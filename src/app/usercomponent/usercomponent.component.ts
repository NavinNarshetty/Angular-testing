import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataService } from '../data.service';

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
  data:string

  constructor(private userservice:UserService , private dataservice:DataService) { }

  ngOnInit() {
    this.user = this.userservice.user
    this.dataservice.getDetails().then((data:string)=>{
      this.data = data;
    })
  }

}
