import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
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
}
