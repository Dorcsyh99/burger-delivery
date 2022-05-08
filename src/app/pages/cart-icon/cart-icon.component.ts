import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {

  items: Food[] = [];
  summary: number;

  constructor(private cartService: CartService) {
    this.summary = cartService.getSummary();
   }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    /*this.items.forEach(item => {
      this.summary += item.price;
    });*/
  }


}
