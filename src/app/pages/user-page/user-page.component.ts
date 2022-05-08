import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { first } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  currentUser?: User;
  allUsers: User[] = [];

  constructor(private userService: UserService) {

   }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    const users = this.userService.getAll().pipe(first());
    users.subscribe(data => {
      this.allUsers = data;
      console.log(data);
      let id = localStorage.getItem("user");
      console.log(id);
      if(id){
        let user = data.find(x => x.email == id);
        console.log(user);
      }
    })
  }

}
