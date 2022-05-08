import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: Food[] = [];
  summary:number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.summary = this.cartService.getSummary();
  }

  deleteItem(food: Food){
    this.cartService.deleteItem(food);
  }

  clearCart(){
    this.cartService.clearCart();
  }

}
