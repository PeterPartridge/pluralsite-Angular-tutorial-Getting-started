import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RoutingModule } from '../routing/routing.module';
import { ProductRoutingModule } from '../routing/product-routing.module';
@NgModule({
  imports: [
   SharedModule,
   ProductRoutingModule
   RoutingModule,
  ] ,
  declarations: [
  //  ProductListComponent,
 //   ProductDetailComponent,
  ]
})
export class ProductModule { }
