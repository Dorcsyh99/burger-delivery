import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  cartEmpty: boolean = false;

  addressForm = new FormGroup({
    zip: new FormControl(Validators.maxLength(4)),
    city: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    other: new FormControl('')
  });


  constructor() { }

  ngOnInit(): void {
  }

}
