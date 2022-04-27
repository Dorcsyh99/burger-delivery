import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
    passAgain: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(private router: Router, private userService: UserService,  private location: Location, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value,
        userName: this.signUpForm.get('userName')?.value,
        phone: this.signUpForm.get('phone')?.value
      };
      localStorage.setItem("currentUid", user.id);
      this.userService.create(user).then(_ => {
        console.log("User added successfully");
        this.router.navigateByUrl('/user-page');
      }).catch(error => {
        console.log(error);
      });
    }).catch(e => {
      console.error(e);
    });
  }
}
