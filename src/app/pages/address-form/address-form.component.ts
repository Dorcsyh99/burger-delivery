import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Address } from 'src/app/shared/models/address';
import { Food } from 'src/app/shared/models/food';
import { AddressService } from 'src/app/shared/services/address.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { FinishComponent } from './finish/finish.component';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  items: Food[] = [];
  addressForm = new FormGroup({
    zip: new FormControl(Validators.maxLength(4)),
    district: new FormControl(''),
    street: new FormControl(''),
    building: new FormControl(''),
    additional: new FormControl('')
  });




  constructor(private router: Router, private cartService: CartService, private addressService: AddressService, private dialog: MatDialog, private snack: MatSnackBar) { }
  ngOnInit(): void {
    this.items = this.cartService.getItems();


  }

  onSubmit(): void{
    if(this.addressForm.valid){
      const addr: Address = {
        zip: this.addressForm.get("zip")?.value,
        district: this.addressForm.get("district")?.value,
        street: this.addressForm.get("street")?.value,
        building: this.addressForm.get("building")?.value,
        additional: this.addressForm.get("additional")?.value
      }
      console.log(addr);
      this.addressService.create(addr).then(r => {
        console.log("Successfully created address");
        this.openDialog(addr);
      }).catch(e => {
        console.log("Hiba! ", e);
      })
    }
  }

  openDialog(addr: Address){
    const dialogRef = this.dialog.open(FinishComponent, {
      data: {
        zip: addr.zip,
        dist: addr.district,
        street: addr.street,
        building: addr.building,
        other: addr.additional
      }
    });
    dialogRef.afterClosed().subscribe(d => {
      this.snack.open("Sikeres megrendelés! Elküldtük emailben a rendelésedhez tartozó nyugtát.", "Ok");
      this.cartService.clearCart();
      this.router.navigateByUrl('/main-page');
    })
  }

  redirect(){
    this.router.navigateByUrl('/menu');
  }

}
