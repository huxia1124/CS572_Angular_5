import { Component, Input } from '@angular/core'

import { Product } from './product'


@Component({
    selector: 'my-product-detail',
    template: `
  <div *ngIf="product">
    <h2>{{product.name}} details!</h2>
    <div><label>id: </label>{{product.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="product.name" placeholder="name"/>
    </div>
    <div>
      <label>Unit price: </label> {{product.price}}
    </div>
    <div>
      <label>Quantity: </label>
      <input [(ngModel)]="quantity" placeholder="quantity"/>
    </div>
    <div>
      <label>Total price: </label> {{product.price | calculatePrice:quantity}}
    </div>
  </div>
`
})

export class ProductDetailComponent {
    @Input()
    product: Product;

    quantity = 1;

}