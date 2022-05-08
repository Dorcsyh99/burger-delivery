import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Cart } from './shared/models/cart';
import { AuthService } from './shared/services/auth.service';
import { CartService } from './shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  page = '';
  routes: Array<string> = [];
  loggedInUser?: firebase.default.User | null;
  badge: number = 0;
  myCart?: Cart;

  /* router: Router;
  constructor(router: Router) {
    this.router = router;
  } */

  constructor(private router: Router, private authService: AuthService, private cartService: CartService) {
    // parameter adattagok
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


  ngOnInit() {
    // fat-arrow
    this.routes = this.router.config.map(conf => conf.path) as string[];

    // rxjs - reaktív programozás
    // subscribe
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage)) {
        this.page = currentPage;
      }
    });
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser?.email));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }

  changePage(selectedPage: string) {
    // this.page = selectedPage;
    this.router.navigateByUrl(selectedPage);
  }

  logout(_?: boolean) {
    this.authService.logout().then(() => {
      localStorage.removeItem("cartId");
      localStorage.removeItem("user");
      console.log('Logged out successfully.');
      this.router.navigateByUrl('/main-page');
    }).catch(error => {
      console.error(error);
    });
  }

  ngOnDestroy(){
    const id = localStorage.getItem("cartId");

  }
}

/*import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'burger-delivery-app';


}
*/
