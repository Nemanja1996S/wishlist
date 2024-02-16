import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [NgFor, NgIf, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishes : wishItem[] = [];



  
}
