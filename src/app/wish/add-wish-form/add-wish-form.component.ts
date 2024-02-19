import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { wishItem } from '../../../shared/models/wishItem';


@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {

  @Output() addWish = new EventEmitter<wishItem>();
  newWishText : string = "";

  addNewWish(){
    this.addWish.emit(new wishItem(this.newWishText, false));
    this.newWishText = "";
  }
}
