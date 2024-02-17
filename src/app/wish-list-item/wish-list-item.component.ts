import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import events from '../../shared/services/EventService'
import { wishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() wish!: wishItem;


  get cssClasses() : any {
    //return this.fulfilled? ['strikeout', 'text-muted']: [];

    return {'strikeout text-muted': this.wish.isDone} 
  }

  toggleFulfilled(){
    this.wish.isDone = !this.wish.isDone;
  }

  removeWish() : any {
    events.emitFromService('removeWishEvent', this.wish);
  }
}
