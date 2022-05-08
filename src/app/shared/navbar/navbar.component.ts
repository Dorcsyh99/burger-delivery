import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit } from '@angular/core';
import { Cart } from '../models/cart';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @Input() currentPage: string = '';
  @Input() loggedInUser?: firebase.default.User | null;
  @Input() badge: number = 0;
  @Input() myCart?: Cart;

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();

  constructor(private authService: AuthService) {

   }

  ngOnInit(): void {
    console.log(this.loggedInUser);
    console.log("badge: ", this.badge);
  }

  ngAfterViewInit(): void {
    console.log(this.loggedInUser);
  }

  logout(_?: boolean) {
    this.authService.logout().then(() => {
      console.log('Logged out successfully.');
    }).catch(error => {
      console.error(error);
    });
  }

  itemsAdded(event: Event){

  }

}
