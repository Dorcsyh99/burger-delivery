import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: Food[] = [];
  summary: number = 0;

  addToCart(food: Food) {
    this.items.push(food);
    this.summary += food.price;
    console.log(this.summary);
  }

  getSummary(){
    return this.summary
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.summary = 0;
    return this.items;
  }

  deleteItem(food: Food){
    this.items.splice(this.items.findIndex(f => f.name === food.name), 1);
    let price = food.price;
    this.summary -= price;
  }
}
