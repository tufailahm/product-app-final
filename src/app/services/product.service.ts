import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry,throwError } from 'rxjs';

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
    return this.httpClient.get<Product[]>(productURL)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  //Getting a single product
  //"http://localhost:3000/product/99
  getProduct(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${productURL}/${productId}`)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  //Deleting a single product
  //"http://localhost:3000/product/99 - DELETE
  deleteProduct(productId: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${productURL}/${productId}`)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  //saving a single product
  //"http://localhost:3000/product
  saveProduct(product:Product): Observable<Product> {
    return this.httpClient.post<Product>(productURL,product,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

    //edit/update a single product
    //Please complete this 
  //localhost:3000/product/71 - PUT and in body we have to pass product object
  updateProduct(productId:number,product:Product): Observable<Product> {
    return this.httpClient.put<Product>(`${productURL}/${productId}`,product,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }



  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Some Error Happened\n Error Details \nError Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }




}
