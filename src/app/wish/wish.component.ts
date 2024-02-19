import { Component, OnInit } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish.service';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit{

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
