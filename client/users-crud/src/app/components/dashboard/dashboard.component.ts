import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
    this.userService.getUsers()
    .subscribe(
      res => {
        this.users = res;
      },
      err => console.error(err)
    )
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id)
    .subscribe((res) => console.log(res));
    window.location.reload()
  }
}
