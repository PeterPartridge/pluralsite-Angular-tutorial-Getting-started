import { Component, OnInit } from '@angular/core';
import {IProduct} from './Product';
import { ProductService } from './product.service';


@Component({
 //   selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number= 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _listFilter: string;
    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    // new product list
    filteredProducts: IProduct[];
    // list data
    products: IProduct[] = [];
    errorMessage: string;
    // methods
constructor(private productService: ProductService) {
}

onRatingClicked(message: string): void {
 this.pageTitle = `Product List ${message}`;
}
ngOnInit(): void {
        console.log('intiate using OnInit');
       // this.products =
         this.productService.getProducts().subscribe(
            products => {
                 this.products = products;
                 this.filteredProducts = this.products;
                },
            error => this.errorMessage = <any>error
        );
}
toggleImage(): void {
        this.showImage = !this.showImage;
}
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
          // for each product in products
          (product: IProduct) =>
          // convert to lower case and check if the filter string is in the array.
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
           );
      }
}
