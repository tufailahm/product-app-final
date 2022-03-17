import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductData } from 'src/app/ProductData';
import { OutdatedproductsService } from 'src/app/services/outdatedproducts.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {

  products: Product[] = [];
  productData = new ProductData();


  constructor(public productService: ProductService,
    public outdatedService: OutdatedproductsService) { }

  ngOnInit(): void {
    // this.products = this.outdatedService.getOutdatedProducts();
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    })
  }
}
