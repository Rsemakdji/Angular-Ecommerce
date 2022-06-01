import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = []

  

  isDisplayModal: boolean = false
  modalProduct: Product | undefined
  productsSub: Subscription | undefined

  constructor(private productService : ProductService) {
  }

  ngOnInit(): void {
    this.productsSub = this.productService.getProducts()
    .subscribe({
      next: (products: Product[])=>{
        this.products = products
      },
      error: (error: any)=>{
        console.log("error :", error);
      },
      complete: ()=>{
        console.log("complete");
      }
      
    })
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe()
  }

  

  handleDeleteProduct(product: Product) {
    this.products = this.products.filter(p => p._id !== product._id)
    // console.log("handleDeleteProduct :" ,product);
  }
  handleDisplayProductViewModal(product: Product) {
    console.log("------- handle dis prod view")
    if (product) {
      this.isDisplayModal = true
      this.modalProduct = product
    }
  }

  handleCloseModal() {
    this.isDisplayModal = false
    this.modalProduct = undefined
  }


}
