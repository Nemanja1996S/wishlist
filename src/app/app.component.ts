import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WishModule, ContactModule, ProductsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private router: Router){

  }

  goToContact(){
    this.router.navigate(['contact']);
  }

  goToHome(){
    this.router.navigate(['']);
  }

  goToProducts(){
    this.router.navigate(['products'])
  }

  ngOnInit(): void {
    
  }
}
