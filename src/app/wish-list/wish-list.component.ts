import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishes : wishItem[] = [];



  toggleItem(item: wishItem){
    item.isDone = !item.isDone;
    console.log(item);
  }
}
