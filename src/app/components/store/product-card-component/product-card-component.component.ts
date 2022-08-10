import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card-component',
  templateUrl: './product-card-component.component.html',
})
export class ProductCardComponentComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}

  ngOnInit(): void {}
}
