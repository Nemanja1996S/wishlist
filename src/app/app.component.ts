import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import events from '../shared/services/EventService'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : wishItem[] = [
    new wishItem('Learn Angular'),
    new wishItem('Get a student intership'),
    new wishItem('Come up with topic for final thesis', true),
    new wishItem('Get a developer job')
  ]

  constructor(){
    events.listenFromService('removeWishEvent', (wish : wishItem) => {
      //remove wish from wishes
      let index : number = this.items.indexOf(wish);
      this.items.splice(index, 1);
      //console.log(wish);
    })
  }

  filterApp : any = () => {};


}
