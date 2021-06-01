import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit(): void {
    this.service
      .fetchProduct(this.route.snapshot.params.id)
      .subscribe((product: Product) => {
        this.product = product;
      });
  }

  edit() {
    this.service
      .editProduct(this.route.snapshot.params.id, this.product)
      .subscribe(() => {
        window.location.pathname = '/';
      });
  }
}
