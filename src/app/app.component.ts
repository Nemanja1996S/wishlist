import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

const filters = [
  (item : wishItem) => item,
  (item : wishItem) => item.isDone,
  (item : wishItem) => !item.isDone]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, FormsModule, WishListComponent, AddWishFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My wishlist';
  items : wishItem[] = [
    new wishItem('Learn Angular'),
    new wishItem('Get a student intership'),
    new wishItem('Come up with topic for final thesis', true),
    new wishItem('Get a developer job')
  ]

 


  filteredValue : string = '0';

  get visibleItems() : any {
    return this.items.filter(filters[parseInt(this.filteredValue)])
  }

}
