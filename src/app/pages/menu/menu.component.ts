import { AfterViewInit, Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodService } from 'src/app/shared/services/food.service';
import { Food } from 'src/app/shared/models/food';
import { first } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart';
import { CartService } from 'src/app/shared/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Output() badge: number = 0;
  @Output() myCart?: Cart;

  isLoading: boolean = true;

  foods: Food[] = [];
  burgers: Food[] = [];
  sides: Food[] = [];
  drinks: Food[] = [];
  desserts: Food[] = [];
  sauces: Food[] = [];

  constructor(public dialog: MatDialog, private foodService: FoodService, private cartService: CartService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.foodService.getAll().pipe(first())
    .subscribe(foods => {
      this.foods = foods;
      console.log(this.foods);
      this.burgers = this.sortByCategory("burger");
      this.sides = this.sortByCategory("side");
      this.drinks = this.sortByCategory("drink");
      this.desserts = this.sortByCategory("dessert");
      this.sauces = this.sortByCategory("sauce");
    });

  }

  ngAfterViewInit(): void {
    this.isLoading = false;
  }

  sortByCategory(category: string){
    let items: Food[] = [];
    this.foods.forEach(f => {
      if(f.category == category){
        items.push(f);
      }
    });
    items.sort((a, b) => a.price - b.price);

    return items;
  }

  addToCart(id: string){
    const food = this.foods.find(f => f.id === id);
    console.log(food);
    if(food){
      this.cartService.addToCart(food)
      this.snackBar.open("Sikeresen hozzáadva a kosárhoz!", "Ok");
    }
  }

}
