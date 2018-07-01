import { Component, OnInit } from "@angular/core";
import {IProduct} from "./Product"


@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls:["./product-list.component.css"]

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
        this.filteredProducts = this.listFilter? this.performFilter(this.listFilter) : this.products;
    }
    // new product list
    filteredProducts : IProduct[];

//list data
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.90,
            "starRating": 4.5,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
    ];
    // methods
constructor(){
    this.filteredProducts = this.products;
    this.listFilter = "cart"
}


    ngOnInit(): void {
        console.log("intiate using OnInit")
    }
    toggleImage() : void {
        this.showImage = !this.showImage;
    }
    performFilter(filterBy:string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
          // for each product in products 
          (product:IProduct) => 
          //convert to lower case and check if the filter string is in the array.
            product.productName.toLocaleLowerCase().indexOf(filterBy) != -1
           )
      }
}