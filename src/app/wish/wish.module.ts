import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { wishItem } from '../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { wishItem } from '../../shared/models/wishItem';
import { WishComponent } from './wish.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    FormsModule,
    WishComponent
  ],
  exports: [
    WishComponent
  ]
})
export class WishModule { }
