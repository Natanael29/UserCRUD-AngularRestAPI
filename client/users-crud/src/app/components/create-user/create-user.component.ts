import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @Input() user?: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log("Id: ", id);
    if(id === "null") {
      console.log('no hay user')
    } else {
      this.getUser(id);
    }
  }

  getUser(id: string){
    this.userService.getUser(id)
    .subscribe(user => this.user = user);
  }

  goBack() {
    this.location.back();
  }

  save(name: string, surname: string, ageString: string, email: string, university: string) {
    let age = Number(ageString);
      this.userService.createUser({name, surname, age, email, university} as User)
      .subscribe(() => this.goBack())
  }

  updateUser(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.userService.updateUser(id, this.user!)
    .subscribe(() => this.goBack())
  }

}
