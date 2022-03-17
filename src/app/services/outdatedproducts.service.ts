import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutdatedproductsService {

  constructor() { }
  getOutdatedProducts() {
    return [
      { 'productId': 2000, productName: 'Wire', quantityOnHand: 25, price: 3500 },
      { 'productId': 2001, productName: 'Headphones', quantityOnHand: 200, price: 12 }
     
    ]
  }
}
