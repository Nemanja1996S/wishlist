import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
//import events from '../shared/services/EventService'
import { EventService } from '../shared/services/EventService';
import { WishService } from './wish.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  items : wishItem[] = [];

  constructor(events : EventService, private wishService : WishService){
    events.listenFromService('removeWishEvent', (wish : wishItem) => {
      //remove wish from wishes
      let index : number = this.items.indexOf(wish);
      this.items.splice(index, 1);
      //console.log(wish);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data : any)  => {
      this.items = data;
      //console.log(data)
    },
    (error : any) => {
        alert(error.message);
    })
  }

  filterApp : any = () => {};


}
