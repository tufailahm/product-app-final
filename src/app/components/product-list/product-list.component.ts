import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductData } from 'src/app/ProductData';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  public productAvailable = true;
  public color = "blue";
  productData = new ProductData();
  public errorMessage!: string;
  public guestName: string = "Isha";
  successMessage!: string

  //DI (Dependency Injection)
  constructor(public productService: ProductService) {
    // this.products = this.productData.getProducts();
    //  this.products = productService.getProducts();
  }

  ngOnInit(): void {
      this.refreshProducts();
  }

  removeProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe((data: any) => {
      this.successMessage = 'Product with product id ' + productId + ' deleted successfully';
      this.refreshProducts();
    }, err => this.errorMessage = err)
  }


  refreshProducts(){
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    }, err => this.errorMessage = err)
  }


  getColor(country: string) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'IN':
        return 'red';
      default:
        return 'aqua'
    }
  }
  people: any[] = [
    {
      "name": "Tufail Ahmed",
      "country": 'IN'
    },
    {
      "name": "Neha Sharma",
      "country": 'UK'
    },
    {
      "name": "Ravi Kiran",
      "country": 'IN'
    },
    {
      "name": "Tarun Sharma",
      "country": 'IN'
    },
    {
      "name": "Cook Tyson",
      "country": 'USA'
    },
    {
      "name": "Richard Tyson",
      "country": 'USA'
    }
  ];


}
