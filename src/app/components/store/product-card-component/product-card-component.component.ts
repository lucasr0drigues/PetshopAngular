import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-component',
  templateUrl: './product-card-component.component.html',
})
export class ProductCardComponentComponent implements OnInit {
  @Input() product: any;
  constructor() {}

  ngOnInit(): void {}
}
