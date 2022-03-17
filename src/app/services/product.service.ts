import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
const productURL = "http://localhost:3000/product"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    })
  }


  constructor(public httpClient: HttpClient) { }

  //Getting all the products
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(productURL);
  }

  //Getting a single product
  //"http://localhost:3000/product/99
  getProduct(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${productURL}/${productId}`);
  }

  //Deleting a single product
  //"http://localhost:3000/product/99 - DELETE
  deleteProduct(productId: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${productURL}/${productId}`);
  }

  //saving a single product
  //"http://localhost:3000/product
  saveProduct(product:Product): Observable<Product> {
    return this.httpClient.post<Product>(productURL,product,this.httpOptions);
  }

    //edit/update a single product
    //Please complete this 
  //localhost:3000/product/71 - PUT and in body we have to pass product object
  updateProduct(productId:number,product:Product): Observable<Product> {
    return this.httpClient.put<Product>(`${productURL}/${productId}`,product,this.httpOptions);
  }
}
