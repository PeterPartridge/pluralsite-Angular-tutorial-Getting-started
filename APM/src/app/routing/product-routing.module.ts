import { NgModule } from '@angular/core';
import { ProductDetailGuard } from '../Products/product-detail.guard';
import { ProductDetailComponent } from '../products/product-detail.component';
import { ProductListComponent } from '../Products/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
 imports: [
  SharedModule,
  RouterModule.forChild([
    { path: 'products', component: ProductListComponent },
    {
      path: 'products/:id',
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent
    }]),
],

  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  exports: [
  RouterModule
  ]
})
export class ProductRoutingModule { }
