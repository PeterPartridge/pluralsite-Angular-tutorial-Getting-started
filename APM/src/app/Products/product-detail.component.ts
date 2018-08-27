import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct;
  products: IProduct[] = [];
  errorMessage: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
