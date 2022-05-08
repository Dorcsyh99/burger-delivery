import { Component, OnInit, Injectable } from '@angular/core';
import { collection, getDocs, Firestore} from '@angular/fire/firestore/lite';
import { Observable } from 'rxjs';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/shared/services/food.service';
import { FirestoreService } from '../../firestore.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  foods: Food[] = [];
  randomStart: number = 0;
  randomEnd: number = 7;


  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getFoods();

  }

  getFoods(){
    this.foodService.getAll().subscribe(data => {
      this.foods = data;
      this.foods.sort((a, b) => a.price + b.price);
      this.foods = this.foods.slice(5,13);
      console.log(this.foods);
    })
  }



}
