import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent implements OnInit{

  product : any = {};
  constructor(private store: ProductsService, private route: ActivatedRoute){ }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');

      if(id){
        this.store.getProductById(parseInt(id, 10)).subscribe((product) => {
          this.product = product;
        })
      }

    })
  }


}
 