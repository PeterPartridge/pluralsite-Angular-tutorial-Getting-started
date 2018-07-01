export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;// number will take only two points, float or decimal is needed for longer numbers
    description: string;
    starRating: number;
    imageUrl: string;
}