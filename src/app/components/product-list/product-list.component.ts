import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  
  products: Product[] = [
  {
    _id: '1',
    name: "voiture bleu",
    description:"voiture bleu sportive",
    category: ['voiture homme', 'voiture femme' , 'voiture sportive'],
    imageUrl: [
      'assets/images/products/lamborghini.jpg',
    ],
    sold_price: 10499,
    regular_price: 20099,
    created_at: new Date()   
  },
  {
    _id: '2',
    name: "Mercedes",
    description:"voiture rouge sportive",
    category: ['voiture homme', 'voiture sportive'],
    imageUrl: [
      'assets/images/products/mercedes.jpg',
    ],
    sold_price: 30219,
    regular_price: 80099,
    created_at: new Date()   
  },
  {
    _id: '3',
    name: "voiture de 2054",
    description:"voiture inexistante",
    category: ['voiture homme', 'voiture femme' , 'voiture sportive'],
    imageUrl: [
      'assets/images/products/voiture-futur.jpg',
    ],
    sold_price: 66499,
    regular_price: 99099,
    created_at: new Date()   
  },
  {
    _id: '4',
    name: "muscle americaine",
    description:"voiture sportive",
    category: [ 'voiture femme' , 'voiture sportive'],
    imageUrl: [
      'assets/images/products/muscleA.jpg',
    ],
    sold_price: 55499,
    regular_price: 55099,
    created_at: new Date()   
  },
  {
    _id: '5',
    name: "voiture de batman",
    description:"voiture  pour combattre le crime",
    category: ['voiture femme' , 'voiture sportive'],
    imageUrl: [
      'assets/images/products/batmobile.jpg',
    ],
    sold_price: 5499,
    regular_price: 9099,
    created_at: new Date()   
  },
  
  
  
]
  constructor() {
    
   }

  ngOnInit(): void {
   
  } 

  
}
