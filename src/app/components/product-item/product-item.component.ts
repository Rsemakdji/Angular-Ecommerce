import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() products: Product | undefined

  constructor() { }

  ngOnInit(): void {
    console.log( "-- PRODUCT ITEM --")
    console.log(this.products)
  }
  handleClickProduct(products: Product | undefined){
    console.log(this.products); 
   }
  deleteProduct(products: Product | undefined){
    console.log(this.products); 
   }
   
}
