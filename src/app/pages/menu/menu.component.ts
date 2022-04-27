import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(MealDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
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
