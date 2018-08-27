import { IProduct } from './Product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
private productUrl = 'api/products/products.json';
    constructor(private http: HttpClient) {}
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
         tap(data => console.log('All: ' + JSON.stringify(data))),
         catchError(this.handleError)
        );
    }

private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
    errorMessage = `Error has occured: ${err.error.message}`;
    }
    // tslint:disable-next-line:one-line
    else { errorMessage = `server returned code: ${err.status}, error message is ${err.message}`; }
    console.error(errorMessage);
    return throwError(errorMessage);
}


}
        /* [
            {
                'productId': 1,
                'productName': 'Leaf Rake',
                'productCode': 'GDN-0011',
                'releaseDate': 'March 19, 2016',
                'description': 'Leaf rake with 48-inch wooden handle.',
                'price': 19.95,
                'starRating': 3.2,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
            },
            {
                'productId': 2,
                'productName': 'Garden Cart',
                'productCode': 'GDN-0023',
                'releaseDate': 'March 18, 2016',
                'description': '15 gallon capacity rolling garden cart',
                'price': 32.99,
                'starRating': 4.2,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
            },
            {
                'productId': 5,
                'productName': 'Hammer',
                'productCode': 'TBX-0048',
                'releaseDate': 'May 21, 2016',
                'description': 'Curved claw steel hammer',
                'price': 8.90,
                'starRating': 4.5,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
            },
        ];*/

