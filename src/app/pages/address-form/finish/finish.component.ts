import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Address } from 'src/app/shared/models/address';
import { Food } from 'src/app/shared/models/food';
import { AddressService } from 'src/app/shared/services/address.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements OnInit {

  address?: Address;
  items: Food[] = [];

  constructor(private cartService: CartService, @Inject(MAT_DIALOG_DATA) public data: {zip: number, dist: number, street: string, building: string, other?: string}) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.address = {
      zip: this.data.zip,
      district: this.data.dist,
      street: this.data.street,
      building: this.data.building,
      additional: this.data.other
    }
  }

}
