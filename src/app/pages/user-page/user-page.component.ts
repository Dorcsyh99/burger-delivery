import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User} from 'firebase/auth';
import { first } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  currentUser?: User;

  constructor(private fireAuth: AngularFireAuth, private userService: UserService, private authService: AuthService) {

   }

  ngOnInit(): void {


  }

  isLoggedIn(){
    return this.fireAuth.authState.pipe(first()).toPromise();
  }

}
