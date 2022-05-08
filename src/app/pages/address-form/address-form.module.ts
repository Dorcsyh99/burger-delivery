import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressFormRoutingModule } from './address-form-routing.module';
import { AddressFormComponent } from './address-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FinishComponent } from './finish/finish.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AddressFormComponent,
    FinishComponent
  ],
  imports: [
    CommonModule,
    AddressFormRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class AddressFormModule { }
