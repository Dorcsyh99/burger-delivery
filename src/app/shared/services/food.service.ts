import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  collectionName = 'foods';

  constructor(private afs: AngularFirestore) { }

  create(food: Food) {
    return this.afs.collection<Food>(this.collectionName).doc(food.id).set(food);
  }

  getAll() {
    return this.afs.collection<Food>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Food>(this.collectionName).doc(id).valueChanges();
  }

  update(food: Food) {
    return this.afs.collection<Food>(this.collectionName).doc(food.id).set(food);
  }

  delete(id: string) {
    return this.afs.collection<Food>(this.collectionName).doc(id).delete();
  }
}

