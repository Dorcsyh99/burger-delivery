import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodService } from 'src/app/shared/services/food.service';
import { Food } from 'src/app/shared/models/food';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  foods: Food[] = [];

  constructor(public dialog: MatDialog, private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getAll().pipe(first())
    .subscribe(foods => {
      this.foods = foods;
      console.log(this.foods);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(MealDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'meal-dialog',
  templateUrl: './meal-dialog.html',
  styleUrls: ['./menu.component.scss']
})
export class MealDialog {
  menuSize: string = "";
  menuSide: string = "";
  menuDrink: string = "";
  menuSauce: string = "";
  size: string [] = ["Kicsi", "Nagy"];
  side: string[] = [
    "Hasábburgonya",
    "Édesburgonya",
    "Káposztasaláta",
    "Friss, kertész saláta"
  ];
  drink: string[] = [
    "Coca cola",
    "Fanta narancs",
    "Fanta citrom",
    "Sprite",
    "Lipton citrom",
    "Lipton barack",
    "Lipton zöld",
    "Dr. pepper",
    "Kinley gyömbér"
  ];
  sauce: string[] = [
    "Ketchup",
    "Fokhagymá-majonéz",
    "Burger szósz",
    "BBQ szósz",
    "Cheddar sajtszósz",
    "Remulád mártás"
  ];

}
