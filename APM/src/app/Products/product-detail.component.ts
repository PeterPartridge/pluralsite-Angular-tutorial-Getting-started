import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
 pageTitle: string = 'Product Details';
 product: IProduct;

 constructor() { }

  ngOnInit(private product: IProduct) {
    this
  }

}
