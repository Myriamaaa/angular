import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.deleteProduct.emit(this.product.id);
  }
}
