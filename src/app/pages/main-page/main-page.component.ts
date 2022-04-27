import { Component, OnInit, Injectable } from '@angular/core';
import { collection, getDocs, Firestore} from '@angular/fire/firestore/lite';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../firestore.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {

  }

  getFoods(){

  }



}
