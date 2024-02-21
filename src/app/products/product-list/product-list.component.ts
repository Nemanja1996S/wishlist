import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  
  products: any[] = [];

  constructor(private store: ProductsService){

  }
  ngOnInit(): void {
    this.store.getAllProducts().subscribe(products =>{
      this.products = products;
    })
  }

}
