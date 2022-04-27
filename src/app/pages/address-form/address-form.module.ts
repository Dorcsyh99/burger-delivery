import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressFormRoutingModule } from './address-form-routing.module';
import { AddressFormComponent } from './address-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    AddressFormRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddressFormModule { }
