import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() products: Product | undefined

  @Output() deleteProductItem: EventEmitter<Product> = new EventEmitter<Product>()

  @Output() displayProductViewModal: EventEmitter<Product> = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
    
  }
  handleClickProduct(product: Product | undefined){
   //console.log(this.product); 
   this.displayProductViewModal.emit(product)
   }
  deleteProduct(product: Product | undefined){
   // console.log(this.products); 
   // this.deleteProductItem.emit(product)
   }
   
}
